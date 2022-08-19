/**
 * 111 - Minimum Depth of a Binary Tree (https://leetcode.com/problems/minimum-depth-of-binary-tree/)
 * --------------------------------------------------------------------------------------------------
 * Given a binary tree, find its minimum depth.
 *
 * The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
 *
 * Note: A leaf is a node with no children.
 */

/**
 * Method 1 - Recursive
 * --------------------
 * [Runtime: 335 ms, faster than 50.16% of JavaScript online submissions for Minimum Depth of Binary Tree.]
 * Memory Usage: 99.9 MB, less than 11.13% of JavaScript online submissions for Minimum Depth of Binary Tree.
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root, count = 0) {
  if (root === null) return count;
  count++;
  if (root.left === null && root.right === null) return count;
  else if (root.left === null) return minDepth(root.right, count);
  else if (root.right === null) return minDepth(root.left, count);
  else {
    let left = minDepth(root.left, count);
    let right = minDepth(root.right, count);
    return Math.min(left, right);
  }
};
