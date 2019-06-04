// Work through this problem on https://leetcode.com/problems/climbing-stairs/ and use the specs given there.
// Feel free to use this file for scratch work.

function climbStairs(n) {
  let table = new Array(n + 1).fill(0);
  table[0] = 1;
  table[1] = 1;

  for (let idx = 2; idx < table.length; idx++) {
    table[idx] = table[idx - 1] + table[idx - 2];
  }

  return table[table.length - 1];
};
