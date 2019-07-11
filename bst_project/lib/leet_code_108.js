// View the full problem and run the test cases at:
//  https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/


var sortedArrayToBST = function (nums) {
  if (nums.length <= 0) return null;

  const midIdx = Math.floor(nums.length / 2);
  const midEle = new TreeNode(nums[midIdx]);

  const left = nums.slice(0, midIdx);
  const right = nums.slice(midIdx + 1);

  const leftTree = sortedArrayToBST(left);
  const rightTree = sortedArrayToBST(right);

  midEle.left = leftTree;
  midEle.right = rightTree;

  return midEle;
};