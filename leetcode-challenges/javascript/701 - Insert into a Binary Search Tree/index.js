/**
 *
 */

import { BinarySearchTree, TreeNode } from '../../../data-structures/index.js';

/**
 * Method 1 - Using Iterative Method
 * ---------------------------------
 * [Runtime: 210 ms, faster than 14.54% of JavaScript online submissions for Insert into a Binary Search Tree.]
 * [Memory Usage: 52.9 MB, less than 46.33% of JavaScript online submissions for Insert into a Binary Search Tree.]
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
  if (root === null) {
    root = new TreeNode(val);
    return root;
  } else {
    let currentNode = root;
    while (currentNode !== null) {
      if (val < currentNode.val) {
        if (currentNode.left === null) {
          currentNode.left = new TreeNode(val);
          return root;
        } else currentNode = currentNode.left;
      } else {
        if (currentNode.right === null) {
          currentNode.right = new TreeNode(val);
          return root;
        } else currentNode = currentNode.right;
      }
    }
  }
};

/**
 * Method 2 - Using Recursive Method
 * ---------------------------------
 * [Runtime: 173 ms, faster than 50.82% of JavaScript online submissions for Insert into a Binary Search Tree.]
 * [Memory Usage: 50.2 MB, less than 71.33% of JavaScript online submissions for Insert into a Binary Search Tree.]
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */

var insertIntoBST = function (root, val) {
  if (root === null) {
    root = new TreeNode(val);
  } else {
    const node = root;
    const add = function (node) {
      if (val < node.val) {
        if (node.left === null) {
          node.left = new TreeNode(val);
          return root;
        } else {
          return add(node.left);
        }
      } else {
        if (node.right === null) {
          node.right = new TreeNode(val);
          return root;
        } else {
          return add(node.right);
        }
      }
    };
    add(node);
  }
  return root;
};

/** Testing */
const bst = new BinarySearchTree();
bst.add(4, 2, 7, 1, 3);

console.log(insertIntoBST(bst.root, 5));

/** Method 1 - Result */
/*
TreeNode {
    val: 4,
    left: TreeNode {
      val: 2,
      left: TreeNode { val: 1, left: null, right: null },
      right: TreeNode { val: 3, left: null, right: null }
    },
    right: TreeNode {
      val: 7,
      left: TreeNode { val: 5, left: null, right: null },
      right: null
    }
  }
*/

/** Method 2 - Result */
/*
TreeNode {
    val: 4,
    left: TreeNode {
      val: 2,
      left: TreeNode { val: 1, left: null, right: null },
      right: TreeNode { val: 3, left: null, right: null }
    },
    right: TreeNode {
      val: 7,
      left: null,
      right: TreeNode { val: 5, left: null, right: null }
    }
  }
*/
