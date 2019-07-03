// ============================================================================
// Implementation Exercise: Stack
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Stack and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  push(val) {
    const node = new Node(val);

    if (!this.top) {
      this.top = node;
      this.bottom = node;
    }

    const temp = this.top;
    this.top = node;
    this.top.next = temp;

    return ++this.length;
  }

  pop() {
    const popped = this.top;

    if (!this.top) {
      return null;
    }

    if (this.top === this.bottom) {
      this.top = null;
      this.bottom = null;
      this.length--;
      return popped.value;
    }

    this.top = this.top.next;
    this.length--;
    return popped.value;
  }

  size() {
    return this.length;
  }

}

exports.Node = Node;
exports.Stack = Stack;
