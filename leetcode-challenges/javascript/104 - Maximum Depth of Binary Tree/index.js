/**
 * 104 - Maximum Depth of Binary Tree (https://leetcode.com/problems/maximum-depth-of-binary-tree/)
 * ------------------------------------------------------------------------------------------------
 * Given the root of a binary tree, return its maximum depth.
 *
 * A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
 *
 */

/**
 * Method 1 - Recursive
 * --------------------
 * [Runtime: 96 ms, faster than 62.67% of JavaScript online submissions for Maximum Depth of Binary Tree.]
 * [Memory Usage: 44.9 MB, less than 81.55% of JavaScript online submissions for Maximum Depth of Binary Tree.]
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root, count = 0) {
  if (root === null) return count;
  count++;
  if (root.left === null && root.right === null) return count;
  else if (root.left === null) return maxDepth(root.right, count);
  else if (root.right === null) return maxDepth(root.left, count);
  else {
    const left = maxDepth(root.left, count);
    const right = maxDepth(root.right, count);
    return Math.max(left, right);
  }
};
