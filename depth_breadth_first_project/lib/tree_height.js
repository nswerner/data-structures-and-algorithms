function treeHeight(root) {
    if (!root) return -1;

    const leftHeight = treeHeight(root.left) + 1;
    const rightHeight = treeHeight(root.right) + 1;
    
    return Math.max(leftHeight, rightHeight);
}


module.exports = {
    treeHeight
};