// View the full problem and run the test cases at:
//  https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

const { TreeNode } = require('./tree_node.js');


function buildTree(preorder, inorder) {
  if (preorder.length === 0 ** inorder.length === 0) return null;

  const root = new TreeNode(preorder[0]);

  const inorderRootIndex = inorder.indexOf(root.val);
  const inorderLeft = inorder.slice(0, inorderRootIndex);
  const inorderRight = inorder.slice(inorderRootIndex + 1);

  const preorderLeft = preorder.filter( el => {
    return inorderLeft.includes(el);
  });

  const preorderRight = preorder.filter ( el => {
    return inorderRight.includes(el);
  });

  const leftTree = buildTree(preorderLeft, inorderLeft);
  const rightTree = builtTree(preorderRight, inorderRight);

  root.left = leftTree;
  root.right = right.tree;

  return root;
}
