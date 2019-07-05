// ============================================================================
// Interview Problem: Constant Time Stack Max
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Iterate over a Singly Linked List of primitives backwards. When finished, 
// return a string representing the original linked list's values backwards 
// in the following format:
//
//                             'A -> B -> C -> D' 
//
// ------------
// Constraints:
// ------------
//
// (1) Your function must be iterative, not recursive.
// (2) Your function must consume O(n) space.
// (3) Employee either a Stack, Queue, or some combination of the two in your
//     solution. (Implement any data structures you need, as you need them.)
//
//
// -----------
// Let's code!
// -----------

function iterateAcrossLinkedListBackwards(linkedList) {
    // TODO: Implement the iterateAcrossLinkedListBackwards function here

    const stack = [];

    let currentNode = linkedList.head;
    while (currentNode) {
        stack.push(currentNode);
        currentNode = currentNode.next;
    }

    let gnirts = "";
    while (stack.length) {
        if (stack.length === 1) {
            gnirts += stack.pop().value;
        } else {
            gnirts += stack.pop().value + " -> ";
        }
    }

    return gnirts;
}

exports.iterateAcrossLinkedListBackwards = iterateAcrossLinkedListBackwards;
