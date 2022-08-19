/**
 * 700 - Search in a Binary Tree
 * --------------------------------------------------------------------
 */

import { BinarySearchTree } from '../../../data-structures/index.js';

/**
 * [Runtime: 111 ms, faster than 65.82% of JavaScript online submissions for Search in a Binary Search Tree.]
 * [Memory Usage: 49.6 MB, less than 24.61% of JavaScript online submissions for Search in a Binary Search Tree.]
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  if (root === null) return null;
  if (val === root.val) return root;
  else if (val < root.val) return searchBST(root.left, val);
  else return searchBST(root.right, val);
};

/** Testing */
const bst = new BinarySearchTree();
bst.add(4, 2, 7, 1, 3);
console.log(JSON.stringify(bst)); // {"root":{"val":4,"left":{"val":2,"left":{"val":1,"left":null,"right":null},"right":{"val":3,"left":null,"right":null}},"right":{"val":7,"left":null,"right":null}}}
console.log(searchBST(bst.root, 5)); // null

const bst2 = new BinarySearchTree();
bst2.add(...[4, 2, 7, 1, 3]);
console.log(JSON.stringify(bst2));
console.log(searchBST(bst2.root, 2)); // TreeNode { val: 2, left: TreeNode { val: 1, left: null, right: null }, right: TreeNode { val: 3, left: null, right: null } }
