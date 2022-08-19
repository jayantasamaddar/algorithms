export class TreeNode {
  constructor(val = null, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

export class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  /**
   * Add a new key to the Binary Search Tree
   * @param  {...number} values
   */
  add(...values) {
    for (const val of values) {
      const node = this.root;
      if (this.root === null) {
        this.root = new TreeNode(val);
      } else {
        const searchAndInsert = function (node) {
          if (val < node.val) {
            if (node.left === null) {
              node.left = new TreeNode(val);
              return;
            } else {
              return searchAndInsert(node.left);
            }
          } else if (val > node.val) {
            if (node.right === null) {
              node.right = new TreeNode(val);
              return;
            } else {
              return searchAndInsert(node.right);
            }
          } else return null;
        };
        searchAndInsert(node);
      }
    }
  }

  /**
   * Remove a new key from the Binary Search Tree
   * @param {number} val
   */
  remove(val) {
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
        let tempNode = node.left;
        while (tempNode.right !== null) {
          tempNode = tempNode.right;
        }
        // replace the node val and cleanup the replaced node;
        node.val = tempNode.val;
        node.left = removeNode(node.left, tempNode.val);
        return node;
      } else if (val < node.val) {
        node.left = removeNode(node.left, val);
        return node;
      } else {
        node.right = removeNode(node.right, val);
        return node;
      }
    };
    this.root = removeNode(this.root, val);
  }

  /**
   * Returns the minimum value from the Binary Tree
   * @returns {number | undefined}
   */
  min() {
    if (this.root === null) return;
    let node = this.root;
    while (node.left !== null) {
      node = node.left;
    }
    return node.val;
  }

  /**
   * Returns the maximum value from the Binary Tree
   * @returns {number | undefined} `number | undefined`
   */
  max() {
    if (this.root === null) return;
    let node = this.root;
    while (node.right !== null) {
      node = node.right;
    }
    return node.val;
  }

  /**
   * Returns the minimum height of the Binary Tree
   * @param {TreeNode | null} node
   * @returns { number } `number`
   */
  minHeight(node = this.root) {
    if (node === null) return -1;

    let left = this.minHeight(node.left);
    let right = this.minHeight(node.right);

    if (left < right) {
      return left + 1;
    } else return right + 1;
  }

  /**
   * Returns the maximum height of the Binary Tree
   * @param {TreeNode | null} node
   * @returns { number } `number`
   */
  maxHeight(node = this.root) {
    if (node === null) return -1;

    let leftCount = Math.max(this.maxHeight(node.left));
    let rightCount = Math.max(this.maxHeight(node.right));

    return Math.max(leftCount, rightCount) + 1;
  }

  /**
   * Returns whether the tree is balanced
   * @param {TreeNode | null} node
   * @returns { boolean } `boolean`
   */
  isBalanced(node = this.root) {
    return this.maxHeight(node) - this.minHeight(node) <= 1;
  }

  /**
   * Returns whether value exists in the Binary Search Tree or not
   * @param {number} val
   * @returns {boolean} `boolean`
   */
  includes(val) {
    let node = this.root;
    while (node !== null) {
      if (val === node.val) return true;
      if (val < node.val) node = node.left;
      else node = node.right;
    }
    return false;
  }

  /**
   * In-Order Traversal
   * Takes in an argument that returns ascending or descending values in an array.
   * <= 0 returns ascending. > 0 returns descending.
   * @returns {number[]} `values`
   */
  inOrder(order = 0) {
    if (this.root === null) return null;
    if (Number(order) === NaN) {
      throw new Error('The parameter must be either 0 or 1');
    }
    const result = [];
    if (Number(order) <= 0) {
      function ascendingOrder(node) {
        if (node.left !== null) ascendingOrder(node.left);
        result.push(node.val);
        if (node.right !== null) ascendingOrder(node.right);
        return result;
      }
      ascendingOrder(this.root);
    } else {
      function descendingOrder(node) {
        if (node.right !== null) descendingOrder(node.right);
        result.push(node.val);
        if (node.left !== null) descendingOrder(node.left);
        return result;
      }
      descendingOrder(this.root);
    }
    return result;
  }

  /**
   * Pre-Order Traversal
   * @returns {number[]} `values`
   */
  preOrder() {
    if (this.root === null) return null;
    const result = [];
    function preOrderTraversal(node) {
      result.push(node.val);
      if (node.left !== null) preOrderTraversal(node.left);
      if (node.right !== null) preOrderTraversal(node.right);
      return result;
    }
    preOrderTraversal(this.root);
    return result;
  }

  /**
   * Post-Order Traversal
   * @returns {number[]} `values`
   */
  postOrder() {
    if (this.root === null) return null;
    const result = [];
    function postOrderTraversal(node) {
      if (node.left !== null) postOrderTraversal(node.left);
      if (node.right !== null) postOrderTraversal(node.right);
      result.push(node.val);
      return result;
    }
    postOrderTraversal(this.root);
    return result;
  }

  /**
   * Level-Order Traversal
   * @returns {number[]}
   */
  levelOrder() {
    if (this.root === null) return null;
    const result = [];
    const Q = [this.root];
    while (Q.length > 0) {
      const node = Q.shift();
      result.push(node.val);
      if (node.left !== null) Q.push(node.left);
      if (node.right !== null) Q.push(node.right);
    }
    return result;
  }
}
