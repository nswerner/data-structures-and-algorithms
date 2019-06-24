// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(val=null) {
        this.value = val;
        this.next = null;
    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;

    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
        const newTail = new Node(val);
        if (this.length === 0) {
            this.head = newTail;
        } else {
            this.tail.next = newTail;
        }

        this.tail = newTail;
        this.length += 1;
        return this;
    }

    // TODO: Implement the removeTail method here
    removeTail() {
        if (this.length === 0) return undefined;
        if (this.length === 1) {
            let removedNode = this.tail;
            this.head = null;
            this.tail = null;
            this.length--;
            return removedNode;
        }

        let currentNode = this.head;

        while (currentNode.next !== this.tail) {
            currentNode = currentNode.next;
        }

        let removedNode = this.tail;
        this.tail = currentNode;
        this.tail.next = null;
        this.length -= 1;

        return removedNode;
    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
        let newHead = new Node(val);
        if (this.length === 0) {
            this.head = newHead;
            this.tail = newHead;
        } else {
            let placeholder = this.head;
            this.head = newHead;
            this.head.next = placeholder;
        }

        this.length += 1;
        return this;
    }

    // TODO: Implement the removeHead method here
    removeHead() {
        const oldHead = this.head;
        if (this.length === 0 ) return undefined;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
            this.length--;
        } else {
            this.head = oldHead.next;
            this.length -=1 ;
        }
        
        return oldHead;
    }

    // TODO: Implement the contains method here
    contains(target) {
        if (this.length === 0) return false;

        let currentNode = this.head;
        while (currentNode !== null) {
            if (currentNode.value === target) {
                return true;
            } else {
                currentNode = currentNode.next;
            }
        }

        return false;
    }

    // TODO: Implement the get method here
    get(index) {
        if (index < 0 || index > this.length) return null;
        
        let counter = 0;
        let currentNode = this.head;

        while (counter < index) {
            currentNode = currentNode.next;
            counter += 1;
        }

        return currentNode;
    }

    // TODO: Implement the set method here
    set(index, val) {
        const foundNode = this.get(index);
        if (foundNode) {
            foundNode.value = val;
            return true;
        }

        return false;
    }

    // TODO: Implement the insert method here
    insert(index, val) {
        if (index < 0 || index >= this.length) return false;
        if (index === this.length) return !!this.addToTail(val);
        if (index === 0) return !!this.addToHead(val);

        const newNode = new Node(val);
        const prev = this.get(index - 1);
        const next = prev.next;

        prev.next = newNode;
        newNode.next = next;
        this.length++;
        return true;
    }

    // TODO: Implement the remove method here
    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === this.length) return !!this.removeTail();
        if (index === 0) return !!this.removeHead();

        const remove = this.get(index);
        const prev = this.get(index - 1);
        const next = remove.next;

        prev.next = next;
        this.length--;
        return remove;
    }

    // TODO: Implement the size method here
    size() {
        return this.length;
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
