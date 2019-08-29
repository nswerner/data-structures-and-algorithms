// Listen, Example, Brute, Optimize, Walkthrough => all done on white board
// DIY led to checking lengths for early returns and then keeping track of removals and inserts, and index shifting accordingly
// Optimize DS => Led to stack implementation

let checkInsertsAndRemovals= function(string1, string2) {
  let longer, shorter;

  if (string1.length > string2.length) {
    longer = string1;
    shorter = string2;
  } else {
    longer = string2;
    shorter = string1;
  }

  let j = 0;
  let shortChar = shorter[j];
  
  const stack = [];

  for (let i = 0; i < longer.length; i++) {
    const longChar = longer[i];
    
    stack.push(longChar);

    if (shortChar === stack[stack.length-1]) {
      stack.pop();
      j+=1;
      shortChar = shorter[j];
    }
  }

  return stack.length < 2;
}

let checkReplacements = function(string1, string2) {
  let diff = 0;

  for (let i = 0; i < string1.length; i++) {
    if (diff > 1) return false;

    const char1 = string1[i];
    const char2 = string2[i];

    if (char1 !== char2) {
      diff++;
    }
  }

  return true;
}

const oneEdit = function(string1, string2) {
  if (string1.length === string2.length) {
    return checkReplacements(string1, string2);
  } else {
    return checkInsertsAndRemovals(string1, string2);
  }
}

console.log(oneEdit('ple', 'pale')); // => true
console.log(oneEdit('pale', 'ple')); // => true
console.log(oneEdit('pales', 'pale')); // => true
console.log(oneEdit('pale', 'bale')); // => true
console.log(oneEdit('bake', 'pale')); // => false
console.log(oneEdit('pale', 'elap')); // => false
