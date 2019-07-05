// ============================================================================
// Interview Problem: StackQueue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement your preferred Stack implementation, including the methods:
//
//   - Push 
//   - Pop 
//   - Size
//
// Then, implement a Queue by instantiating two Stack instances for storage.
//
// The StackQueue implementation should include the following methods:
//
//   - Enqueue
//   - Dequeue
//   - Size
//
// -----------
// Let's code!
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

    push(newNode) {
        if (newNode.next) newNode.next = null;

        if (!this.top) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const temp = this.top;
            this.top = newNode;
            this.top.next = temp;
        }

        return ++this.length;
    }

    pop() {
        if (!this.top) return null;

        const temp = this.top;

        if (this.top === this.bottom) {
            this.bottom = null;
        }

        this.top = this.top.next;
        this.length--;
        return temp;
    }

    size() {
        return this.length;
    }
}

class StackQueue {
    constructor() {
        this.inStack = new Stack();
        this.outStack = new Stack();
        this.front = null;
        this.back = null;
        this.length = 0;
    }

    enqueue(val) {
        const newNode = new Node(val);
        
        if (!this.front) {
            this.front = newNode;
            this.back = newNode;
            // this.outStack.push(newNode);
        } else {
            this.back.next = newNode;
            this.back = newNode;
            // this.outStack.push(newNode);
        }

        return ++this.length;
    }

    dequeue() {
        
        if (!this.front) return null;

        if (this.front === this.back) {
            this.back = null;
        }

        const temp = this.front;
        this.front = this.front.next;
        this.length--;
        return temp;
    }

    size() {
        return this.length;
    }

};

exports.Node = Node;
exports.Stack = Stack;
exports.StackQueue = StackQueue;
