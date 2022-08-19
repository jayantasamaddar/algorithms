import { TreeNode } from '../../../data-structures/index.js';

var rightSideView = function (root, arr = []) {
  if (root === null) return arr;
  arr.push(root.val);
  if (root.right !== null) rightSideView(root.right, arr);
  return arr;
};

/**
 *
 */

var rightSideView = function (root, arr = []) {
  if (root === null) return arr;
  if (root.right === null) {
    arr.push(root.val);
    let currentNode = root.left;
    while (currentNode !== null) {
      arr.push(currentNode.val);
      currentNode = currentNode.right;
    }
  } else {
    while (root !== null) {
      arr.push(root.val);
      root = root.right;
    }
  }
  return arr;
};

var rightSideView = function (root, result = []) {
  if (root === null) return null;
  const Q = [root];
  while (Q.length > 0) {
    const node = Q.shift();
    result.push(node.val);
    if (node.right !== null) Q.push(node.right);
    else if (node.left !== null) Q.push(node.left);
  }
  return result;
};

/** Testing */
const tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);
tree.left.left = new TreeNode(4);
console.log(rightSideView(tree));
