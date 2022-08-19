/**
 * 222 - Count Complete Tree Nodes
 * ------------------------------------------------------------------
 *
 */

/**
 * Method 1 - Recursive One-Liner
 * ------------------------------
 * [Runtime: 173 ms, faster than 43.96% of JavaScript online submissions for Count Complete Tree Nodes.]
 * [Memory Usage: 69.9 MB, less than 46.25% of JavaScript online submissions for Count Complete Tree Nodes.]
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function (root) {
  return root === null ? 0 : countNodes(root.left) + countNodes(root.right) + 1;
};
