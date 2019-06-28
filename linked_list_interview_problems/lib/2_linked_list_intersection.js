// ============================================================================
// Interview Problem: Linked List Intersection
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Write a function linkedListIntersection that returns the node at which the 
// intersection of two linked lists begins, or null if there is no such 
// intersection.
//
// ---------- 
// Example 1:
// ----------
// 
// Given the following two linked lists, list1 and list2, 
// linkedListIntersection(list1,list2) should return D 
// as the node of intersection.
// 
//    A → B → C
//             ↘
//               D → E → F
//             ↗
//        X → Y
//
// ---------- 
// Example 2:
// ----------
//
// Given the following two linked lists, list1 and list2, 
// linkedListIntersection(list1, list2) should return null 
// as there is no point of intersection.
// 
//    A → B → C → D
//
//    X → Y → Z
// 
// -----------
// Let's code!
// -----------


// strategy:
// if one list is longer than the other, traverse down the list until the two lists' lengths are the same, then check for deep equality.
// can't use .length property because setting .next= does not update the LL length.
function linkedListIntersection(list1, list2) {
  const list1Length = getListLength(list1.head);
  const list2Length = getListLength(list2.head);
  let diff = Math.abs(list1Length - list2Length);
  
  let long = list1Length >= list2Length ? list1.head : list2.head;
  let short = list1Length >= list2Length ? list2.head : list1.head;

  while (long && short) {
    if (diff > 0) {
      long = long.next;
      diff--;
      continue;
    }

    if (long === short) return long;

    long = long.next;
    short = short.next;
  }

  return null;
}

function getListLength(node) {
  if (node.next === null) {
    return 1;
  } else {
    return getListLength(node.next) + 1;
  }
}

// ----------------------------------------
// Given: Singly Linked List - Do Not Edit!
// ----------------------------------------
class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToTail(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }

    this.tail = newNode;
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
}

// --------------------------------------
// Helper For Testing Only - Do Not Edit!
// --------------------------------------
var stringify = function(list) {
  var result = [];
  while(list !== null) {
    result.push(list.value);
    list = list.next;
  }
  return result.join("");
}

exports.Node = Node;
exports.LinkedList = LinkedList;
exports.linkedListIntersection = linkedListIntersection;
exports.stringify = stringify;



// let list1 = new LinkedList();
// list1.addToTail("A");
// list1.addToTail("B");
// list1.addToTail("C");
// list1.addToTail("D");
// list1.addToTail("E");
// list1.addToTail("F");

// let list2 = new LinkedList();
// list2.addToTail('X');
// list2.addToTail('Y');

// nodeD = list1.get(3);
// nodeY = list2.get(1);

// nodeY.next = nodeD;

// linkedListIntersection(list1, list2);
