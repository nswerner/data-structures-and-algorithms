// View the full problem and run the test cases at:
//  https://leetcode.com/problems/course-schedule/

var createGraph = function (prereqs) {
  const graph = {};

  for (let idx = 0; idx < prereqs.length; idx++) {
    [course, prereq] = prereqs[idx].map(String);

    if (course in graph) {
      graph[course].push(prereq);
    } else {
      graph[course] = [prereq];
    }

    if (!(prereq in graph)) {
      graph[prereq] = [];
    }
  }


  return graph;
}


var canFinish = function (numCourses, prerequisites) {
  const prereqs = createGraph(prerequisites);
  const completed = new Set();
  let validCourse = true;

  while (validCourse) {
    validCourse = false;

    for (let course in prereqs) {
      if (!completed.has(course) && prereqs[course].every(preq => completed.has(preq))) {
        completed.add(course);
        validCourse = true;
      }
    }
  }

  return completed.size === Object.keys(prereqs).length;
}


console.log(canFinish(2, [[1,0]]));