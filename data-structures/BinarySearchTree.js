class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  /** Add a new Node */
  add(data) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      const searchTree = function (node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            /** If the left node has a value, continue searching */
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            /** If the right node has a value, continue searching */
            return searchTree(node.right);
          }
        } else return null;
      };

      return searchTree(node);
    }
  }

  /** Find node with minimum value */
  min() {
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  /** Find node with maximum value */
  max() {
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }

  /** Find if node with value is present */
  isPresent(data) {
    let current = this.root;
    while (current) {
      if (data === current.data) {
        return true;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  /** Removes Node with value */
  remove(data) {
    const removeNode = function (node, data) {
      if (node === null) {
        return null;
      }

      if (data === node.data) {
        // node has no children
        if (node.left === null && node.right === null) {
          return null;
        }

        // node has no left child
        if (node.left === null) {
          return node.right;
        }

        // node has no right child
        if (node.right === null) {
          return node.left;
        }

        // node has two children
        let tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        // replace with the node data
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };
    this.root = removeNode(this.root, data);
  }

  /** Whether the Binary Tree is balanced */
  isBalanced() {
    return this.maxHeight() - this.minHeight() >= 1;
  }

  /** The distance between the root node and the first node that doesn't have two children. */
  minHeight(node = this.root) {
    if (node === null) return -1;

    let left = this.minHeight(node.left);
    let right = this.minHeight(node.right);

    if (left < right) {
      return left + 1;
    } else return right + 1;
  }

  /** The distance between the root node and the bottom-most node. */
  maxHeight(node = this.root) {
    if (node === null) return -1;

    let left = this.maxHeight(node.left);
    let right = this.maxHeight(node.right);

    if (left > right) {
      return left + 1;
    } else return right + 1;
  }

  /** Traversing the Binary-Tree */
  /** In-Order Search */
  inOrder() {
    if (this.root === null) return null;
    else {
      const result = [];
      function traverseInOrder(node) {
        node.left && traverseInOrder(node.left);
        result.push(node.data);
        node.right && traverseInOrder(node.right);
      }
      traverseInOrder(this.root);
      return result;
    }
  }

  /** Pre-Order Search */
  preOrder() {
    if (this.root === null) return null;
    else {
      const result = [];
      function traversePreOrder(node) {
        result.push(node.data);
        node.left && traversePreOrder(node.left);
        node.right && traversePreOrder(node.right);
      }
      traversePreOrder(this.root);
      return result;
    }
  }

  /** Pre-Order Search */
  postOrder() {
    if (this.root === null) return null;
    else {
      const result = [];
      function traversePostOrder(node) {
        node.left && traversePostOrder(node.left);
        node.right && traversePostOrder(node.right);
        result.push(node.data);
      }
      traversePostOrder(this.root);
      return result;
    }
  }

  /** Level-Order Search */
  levelOrder() {
    const result = [];
    const Q = [];
    if (this.root === null) return null;
    else {
      Q.push(this.root);
      while (Q.length > 0) {
        const node = Q.shift();
        result.push(node.data);
        if (node.left !== null) {
          Q.push(node.left);
        }
        if (node.right !== null) {
          Q.push(node.right);
        }
      }
      return result;
    }
  }
}

const bst = new BST();

bst.add(9);
bst.add(4);
bst.add(3);
bst.add(6);
bst.add(5);
bst.add(7);
bst.add(17);
bst.add(21);
bst.add(20);
bst.add(30);
console.log(bst.min()); // 3
console.log(bst.max()); // 30
console.log(bst.isPresent(30)); // true
bst.remove(30);
console.log(bst.max()); // 21
console.log(bst.isPresent(30)); // false
console.log(bst.minHeight()); // 1
console.log(bst.maxHeight()); // 3
console.log(bst.isBalanced()); // true
console.log(bst.inOrder()); // [ 3,  5,  6,  7, 9, 17, 20, 21 ]
console.log(bst.preOrder()); // [ 9,  4,  3,  6, 5, 7, 17, 21, 20 ]
console.log(bst.postOrder()); // [ 3,  5,  7, 6, 4, 20, 21, 17, 9 ]
console.log(bst.levelOrder()); // [ 9, 4, 17, 3, 6, 21, 5, 7, 20 ]
