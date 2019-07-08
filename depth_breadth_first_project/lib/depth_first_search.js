function depthFirstSearch(root, targetVal) {
    if (!root) return null;

    const memoLeft = depthFirstSearch(root.left, targetVal);

    if (root.val === targetVal) return root;

    const memoRight = depthFirstSearch(root.right, targetVal);

    return memoLeft || memoRight;
}

function depthFirstSearch(root, targetVal) {
    const stack = [ root ];

    while (stack.length) {
        const node = stack.pop();

        if (node.val === targetVal) return node;

        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
    }
    
    return null;
}


module.exports = {
    depthFirstSearch
};