function treeSum(root) {
    const queue = !!root ? [root] : [];
    let result = 0;

    while (queue.length) {
        let node = queue.shift();
        result += node.val;

        if (node.left) {
            queue.push(node.left);
        }

        if (node.right) {
            queue.push(node.right);
        }
    }

    return result;
}


module.exports = {
    treeSum
};