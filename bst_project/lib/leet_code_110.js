// View the full problem and run the test cases at:
//  https://leetcode.com/problems/balanced-binary-tree/


var getHeight = function (root) {
  if (!root) return -1;

  return 1 + Math.max(getHeight(root.left), getHeight(root.right));
}

var isBalanced = function (root) {
  if (!root) return true;

  if (Math.abs(getHeight(root.left) - getHeight(root.right)) <= 1) {
    const leftBalance = isBalanced(root.left);
    const rightBalance = isBalanced(root.right);

    return leftBalance && rightBalance;
  } else {
    return false;
  };
};