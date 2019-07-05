// ============================================================================
// Interview Problem: Constant Time Stack Max
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Modify the definition of the Stack class provided to create an enhanced 
// version of a Stack data structure called MinMaxStack.
//
// A MinMaxStack has all of the same behavior as a Stack, but can also return
// the node with the minimum or maximum value in constant time.
//
// You may alter any of the original Stack's methods, including the 
// constructor.
//  
// Values of nodes of the MinMaxStack are always guaranteed to be numbers.
//
//
// ------------
// Constraints:
// ------------
//
// (1) All MinMaxStack methods must run in constant time, O(1).
//
//
// --------
// Example:
// --------
//
// const minMaxStack = new MinMaxStack();
//
// minMaxStack.push(10);
// minMaxStack.push(12);
// minMaxStack.push(8);
// minMaxStack.push(2);
// minMaxStack.push(20);
//
// console.log(minMaxStack.min().value);   => 2
// console.log(minMaxStack.max().value);   => 20
//
// minMaxStack.pop();
// console.log(minMaxStack.min().value);   => 2
// console.log(minMaxStack.max().value);   => 12
//
// minMaxStack.pop();
// console.log(minMaxStack.min().value);   => 8
// console.log(minMaxStack.max().value);   => 12
//
// minMaxStack.pop();
// console.log(minMaxStack.min().value);   => 10
// console.log(minMaxStack.max().value);   => 12
//
// minMaxStack.pop();
// console.log(minMaxStack.min().value);   => 10
// console.log(minMaxStack.max().value);   => 10
//
// minMaxStack.pop();
// console.log(minMaxStack.min());   => null
// console.log(minMaxStack.max());   => null
//
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

// Refactor the regular Stack below into a MinMaxStack!
class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    // need to update max and mins
    push(val) {
        const newNode = new Node(val);

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


    //need to reset Infinitys on an empty stack
    pop() {
        if (!this.top) {
            return null;
        }
        const temp = this.top;
        if (this.top === this.bottom) {
            this.bottom = null;
        }
        this.top = this.top.next;
        this.length--;
        return temp.value;
    }

    size() {
        return this.length;
    }
}

class MinMaxStack extends Stack {
    constructor() {
        super();
        this.hi = [];
        this.lo = [];
    }

    push(val) {
        const newNode = new Node(val);

        if (!this.hi.length || val >= this.hi[this.hi.length - 1].value) {
            this.hi.push(newNode);
        }

        if (!this.lo.length || val <= this.lo[this.lo.length - 1].value) {
            this.lo.push(newNode);
        }

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

        if (!this.top) {
            return null;
        }
        const temp = this.top;

        if (temp.value === this.hi[this.hi.length - 1].value) this.hi.pop();
        if (temp.value === this.lo[this.lo.length - 1].value) this.lo.pop();

        if (this.top === this.bottom) {
            this.bottom = null;
        }
        
        this.top = this.top.next;
        this.length--;
        return temp;
    }

    min() {
        if (this.length === 0) return null;
        if (this.top === this.bottom) return this.top;
        return this.lo[this.lo.length - 1] || null;
    }

    max() {
        if (this.length === 0) return null;
        if (this.top === this.bottom) return this.top;
        return this.hi[this.hi.length - 1] || null;
    }

    size() {
        return this.length;
    }
}

// Forgetting something down here? 
exports.Node = Node;
exports.Stack = Stack;
exports.MinMaxStack = MinMaxStack;
