/**
 * 450 - Delete Node in a BST
 * --------------------------------------------------------------------
 * Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference (possibly updated) of the BST.
 *
 * Basically, the deletion can be divided into two stages:
 *
 *     Search for a node to remove.
 *     If the node is found, delete the node.
 *
 */

/**
 * Method 1 - Recursive Solution (Pure Function)
 * ----------------------------------------------
 * [Runtime: 146 ms, faster than 49.41% of JavaScript online submissions for Delete Node in a BST.]
 * [Memory Usage: 51.2 MB, less than 28.52% of JavaScript online submissions for Delete Node in a BST.]
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  const removeNode = (node, val) => {
    if (node === null) return null;

    if (val === node.val) {
      // node is a leaf node
      if (node.left === null && node.right === null) return null;
      if (node.left === null) return node.right;
      if (node.right === null) return node.left;

      /**
       * node has two children:
       */
      let tempNode = node.right;
      while (tempNode.left !== null) {
        tempNode = tempNode.left;
      }
      // replace the node val and cleanup the replaced node;
      node.val = tempNode.val;
      node.right = removeNode(node.right, tempNode.val);
      return node;
    } else if (val < node.val) {
      node.left = removeNode(node.left, val);
      return node;
    } else {
      node.right = removeNode(node.right, val);
      return node;
    }
  };
  root = removeNode(root, key);
  return root;
};

/**
 * Method 1 - Recursive Solution (Pure Function)
 * ----------------------------------------------
 * [Runtime: 131 ms, faster than 68.95% of JavaScript online submissions for Delete Node in a BST.]
 * [Memory Usage: 50.8 MB, less than 83.20% of JavaScript online submissions for Delete Node in a BST.]
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */

var deleteNode = function (root, key) {
  if (root === null) return null;

  if (key === root.val) {
    // node is a leaf node
    if (root.left === null && root.right === null) return null;
    if (root.left === null) return root.right;
    if (root.right === null) return root.left;

    /**
     * node has two children:
     */
    let tempNode = root.right;
    while (tempNode.left !== null) {
      tempNode = tempNode.left;
    }
    // replace the node val and cleanup the replaced node;
    root.val = tempNode.val;
    root.right = deleteNode(root.right, tempNode.val);
    return root;
  } else if (key < root.val) {
    root.left = deleteNode(root.left, key);
    return root;
  } else {
    root.right = deleteNode(root.right, key);
    return root;
  }
};
