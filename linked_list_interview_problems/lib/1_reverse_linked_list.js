// ============================================================================
// Interview Problem: Reverse a Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Given a Singly Linked List, write a function that reverses the order of the
// list's nodes.
//
// Note: You are guaranteed not to receive a linked list with cycles as input.
//
// ------------
// Constraints:
// ------------ 
//
// (1) Your function must run in linear time, O(n).
// (2) You must reverse the list *in place*. (i.e. Use constant space, O(1).)
//
// ------------
// Explanation:
// ------------
//
// Given the following linked list:
//
//   First → Second → Third → Fourth → Fifth → null
//
// Should be mutated into the following list:
//
//   Fifth → Fourth → Third → Second → First → null
//
// This must be done without instantiating a NEW instance of a LinkedList.
// You must do reverse the list in place, by mutating the original input.
//
// --------
// Example:
// --------
//
// const linkedList = new LinkedList();
// linkedList.addToTail('First');
// linkedList.addToTail('Second');
// linkedList.addToTail('Third');
// linkedList.addToTail('Fourth');
// linkedList.addToTail('Fifth');
//
// Current List:  First → Second → Third → Fourth → Fifth → null
//
// const result = reverseLinkedList(root);
//
// Mutated List:  Fifth → Fourth → Third → Second → First → null
//
// result.head.value            => 'Fifth'
// result.head.next.value       => 'Fourth'
// result.tail.value            => 'First'
// result.tail.value.next       =>  null
//
// The old head is now the terminal node!
//
// -----------
// Let's code!
// -----------

function getNode(linkedlist, index) {
  if (index < 0 || index >= linkedlist.length) return null;

  let idx = 0;
  let node = linkedlist.head;
  while (idx < index) {
    node = node.next;
    idx++;
  }

  return node;
}

// I think I could improve on the time complexity from O(3n^2) to O(n) by creating a helper f(x) to swap, that got its Node from the current iteration/stack

function reverseLinkedList(linkedList) {
  const length = linkedList.length;

  for (let idx = 0; idx < Math.floor(length / 2); idx++) {    
    let leftPrev = getNode(linkedList, idx - 1);
    let rightPrev = getNode(linkedList, length - 2 - idx);

    let leftNode = leftPrev ? leftPrev.next : getNode(linkedList, idx);
    let rightNode = rightPrev ? rightPrev.next : null;

    let leftNext = leftNode.next;
    let rightNext = rightNode.next;

    if (length % 2 === 0 && idx === Math.floor(length / 2) - 1) {
      leftPrev ? leftPrev.next = rightNode : linkedList.head = rightNode;
      rightNode.next = leftNode;
      leftNode.next = rightNext;
    } else {
      rightPrev.next = leftNode;
      leftNode.next = rightNext;

      leftPrev ? leftPrev.next = rightNode : linkedList.head = rightNode;
      rightNode.next = leftNext;
    }

    if (idx === 0) linkedList.tail = leftNode;
  }

  return linkedList;
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
}

exports.Node = Node;
exports.LinkedList = LinkedList;
exports.reverseLinkedList = reverseLinkedList;

