const { TreeNode } = require('./tree_node.js');


function inOrderArray(root) {
    if (!root) return [];

    return inOrderArray(root.left).concat(root.val).concat(inOrderArray(root.right));
}

function postOrderArray(root) {
    if (!root) return [];

    return postOrderArray(root.left).concat(postOrderArray(root.right)).concat(root.val);
}


module.exports = {
    inOrderArray,
    postOrderArray
};
