# Table of Contents

- [Table of Contents](#table-of-contents)
- [Binary Tree](#binary-tree)
- [Binary Search Tree](#binary-search-tree)
- [Terminology related to Trees](#terminology-related-to-trees)
- [Properties](#properties)
      - [Node Properties](#node-properties)
      - [Binary Tree Properties](#binary-tree-properties)
- [Methods](#methods)
    - [Basic Operations](#basic-operations)
    - [Advanced Operations](#advanced-operations)
  - [Add](#add)
      - [Building the `add(...values)` method to add elements to the Linked List:](#building-the-addvalues-method-to-add-elements-to-the-linked-list)
  - [Remove](#remove)
      - [Building the `remove(val)` method to remove an element, from the Linked List:](#building-the-removeval-method-to-remove-an-element-from-the-linked-list)
  - [Minimum and Maximum Value](#minimum-and-maximum-value)
      - [Building the `min()` method](#building-the-min-method)
      - [Building the `max()` method](#building-the-max-method)
  - [Finding a value](#finding-a-value)
      - [Building the `includes(val)` method](#building-the-includesval-method)
  - [Height](#height)
      - [Building the **`minHeight()`** method:](#building-the-minheight-method)
      - [Building the `maxHeight()` method:](#building-the-maxheight-method)
  - [Balanced Tree](#balanced-tree)
      - [Building the `isBalanced()` method:](#building-the-isbalanced-method)
  - [Tree Traversal - Introduction](#tree-traversal---introduction)
  - [Tree Traversal - Depth-First Search](#tree-traversal---depth-first-search)
      - [Building the `inOrder(number)` method to search the Binary Search Tree](#building-the-inordernumber-method-to-search-the-binary-search-tree)
      - [Building the `preOrder()` method to search the Binary Search Tree](#building-the-preorder-method-to-search-the-binary-search-tree)
      - [Building the `postOrder()` method to search the Binary Search Tree](#building-the-postorder-method-to-search-the-binary-search-tree)
  - [Tree Traversal - Breadth-First Search](#tree-traversal---breadth-first-search)
      - [Building the `levelOrder()` method to search the Binary Tree](#building-the-levelorder-method-to-search-the-binary-tree)
  - [Tree Traversal - Use Cases](#tree-traversal---use-cases)
      - [In-Order Traversal](#in-order-traversal)
      - [Pre-Order Traversal](#pre-order-traversal)
      - [Post-Order Traversal](#post-order-traversal)
      - [Level-Order Traversal](#level-order-traversal)

---

# Binary Tree

A **Binary Tree** is a node-based tree data structure that has at most branches for every single node.
Other tree data structures can have any number of branches for a single node. However a Binary Tree can have at most two branches for every single node.

All Binary Trees have the following characteristics:

- Has exactly one root node.
- Each parent node has at most two children.
- There can only be one single unique path from the root to any node.

The **Binary Search Tree** is one type of a Binary Tree. The **Heap** is an example of another Binary Tree.

---

# Binary Search Tree

A **Binary Search Tree** is a specific node-based binary tree data structure that has the following characteristics:

- The left subtree of a node contains only nodes with keys < the node’s key.
- The right subtree of a node contains only nodes with keys > the node’s key.
- The left and right subtree each must also be a binary search tree.

**Note:** Usually a Binary Tree doesn't allow duplicates. However, there are variants of Binary Search Trees that may allow duplicates.

In that case, two approaches can be adapted:

1. The left subtree of nodes will only contain keys with value **_lesser than or equal to_** (<=) the node's key and the right subtree of nodes will only contain keys with value **_greater than or equal to_** (>=) the node's key. However, duplicates may be separated by any number of levels, so checking for a duplicates existence is not a very optimum operation.

2. In order to avoid the above issue to not represent duplicates structurally (as separate nodes), is to use a counter that counts the number of occurences of the key. This simplifies lookup, removal and insertion operations, at the expense of some extra bytes and counter operations.

![Binary Search Tree](https://media.geeksforgeeks.org/wp-content/uploads/BSTSearch.png)

Let's take a look at the terminologies related to trees in general.

---

# Terminology related to Trees

- **Nodes** - The data points in a tree are called nodes. For a binary tree, each node can have a left and a right node attached to it.
- **Root Node** - The topmost node is called the root node.
- **Parent Node** - A node with branches leading to other nodes (subtree) is called a parent node.
- **Child Node** - A node with a parent node is called a child node. Children are parents of their own subtree.
- **Leaf Node** - A node that do not have any children is called a Leaf Node.
- **Siblings** - Nodes sharing the same parent node.
- **Height** - The height in a tree represents the distance from the root node and any given node.
  - **minHeight** - The distance between the root node and _the first node that doesn't have two children_.
  - **maxHeight** - The distance between the root node and the _bottom-most node_.
- **Balanced Tree** - A balanced tree is one where the difference between the `minHeight` and the `maxHeight` is at most 1.

---

# Properties

#### Node Properties

- **`val`** − The value stored by the node.
- **`left`** − The left child node of this node.
- **`right`** − The right child node of this node.

We can encapsulate this in a class **`TreeNode`** and use the class to create objects:

```
class TreeNode {
    constructor(val = null, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
```

#### Binary Tree Properties

- **`root`** − The root node of the Binary Tree.

The main **`BinarySearchTree`** class may look something like this:

```
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
}
```

---

# Methods

### Basic Operations

- **`add`** - Adds an element to the Binary Search Tree.
- **`remove`** - Removes an element from the Binary Search Tree.
- **`min`** - Returns the node with the minimum value.
- **`max`** - Returns the node with the maximum value.
- **`minHeight`** - Returns the minimum height of the tree
- **`maxHeight`** - Returns the maximum height of the tree.
- **`includes`** - Returns whether value exists in the tree.
- **`isBalanced`** - Returns whether the tree is balanced.

### Advanced Operations

- **`inOrder`** - Depth First Search that traverses the tree in-order from the given node.
- **`preOrder`** - Depth First Search that traverses the tree pre-order from the given node.
- **`postOrder`** - Depth First Search that traverses the tree post-order from the given node.
- **`levelOrder`** - Breadth First Search that traverses the tree level-order from the given node.

---

## Add

#### Building the `add(...values)` method to add elements to the Linked List:

We will be using the `TreeNode` class to create Nodes.

```
BinarySearchTree.prototype.add = function (...values) {
    for (const val of values) {
        const node = this.root;
        if(this.root === null) {
            this.root = new TreeNode(val);
        } else {
            const searchAndInsert = function (node) {
                if (val < node.val) {
                    if (node.left === null) {
                        node.left = new TreeNode(val);
                        return;
                    }
                    else {
                        return searchAndInsert(node.left);
                    }
                } else {
                    if (node.right === null) {
                        node.right = new TreeNode(val);
                        return;
                    } else {
                        return searchAndInsert(node.right);
                    }
                } else return null;
            }
            searchAndInsert(node);
        }
    }
}
```

---

## Remove

#### Building the `remove(val)` method to remove an element, from the Linked List:

The process involves:

- Finding the node to be removed.
- Choosing a path to traverse, in order to find another value to replace it in the tree.

Let's take the following Binary Tree as an example:

```
        50
       /  \
      /    \
     /      \
   40        70
  /  \      /  \
35    45  60    80
```

If `50` is to be removed, the replacement value can be found by either going left or right.

1. When going left, we find the rightmost node and replace the to-be-removed node's value with this value. If no node to the right exists, then the value of the left node is taken as the replacement.

**To illustrate**,

```
        45
       /  \
      /    \
     /      \
   40        70
  /         /  \
35        60    80
```

Let's write the code for removal of a key using the left traversal path for a Binary Search Tree:

```
BinarySearchTree.prototype.remove = function (val) {
    const removeNode = (node, val) => {
        if (node === null) return null;

        if (val === node.val) {
            if (node.left === null && node.right === null) return null;
            if (node.left === null) return node.right;
            if (node.right === null) return node.left;

            // pick left node
            let tempNode = node.left;
            // traverse to the rightmost node
            while (tempNode.right !== null) {
                tempNode = tempNode.right;
            }
            // replace the node value
            node.val = tempNode.val;
            // cleanup the replaced node
            node.left = removeNode(node.left, val);
            return node;
            } else if (val < node.val) {
                node.left = removeNode(node.left, val);
                return node;
            } else {
                node.right = removeNode(node.right, val);
                return node;
            }
        }
    }
    return removeNode(this.root, val);
}
```

2. When going right, we find the leftmost node and replace the to-be-removed node's value with this value. If no node to the left exists, then the value of the right node is taken as the replacement.

**To illustrate**,

```
        60
       /  \
      /    \
     /      \
   40        70
  /  \         \
35    45        80
```

Let's write the code for removal of a key using the right traversal path for a Binary Search Tree:

```
BinarySearchTree.prototype.remove = function (val) {
    const removeNode = function (node, val) {
        if (node === null) return null;
        if (node.left === null && node.right === null) return null;
        if (node.left === null) return node.right;
        if (node.right === null) return node.left;

        if (val === node.val) {
            // pick right node
            let tempNode = node.right;
            // traverse to the leftmost node
            while (tempNode.left !== null) {
                tempNode = tempNode.left;
            }
            // replace the node value
            node.val = tempNode.val;
            // cleanup the replaced node
            node.right = removeNode(node.right, tempNode.val);
            return node;
        } else if (val < node.val) {
            node.left = removeNode(node.left, val);
            return node;
        } else {
            node.right = removeNode(node.right, val);
            return node;
        }
    }
    return removeNode(this.root, val);
}
```

We can pick any of these two traversal paths for removal. Both result in valid Binary Search Trees.

---

## Minimum and Maximum Value

#### Building the `min()` method

The minimum value of a Binary Search Tree is the value of the leftmost node.

To do this, we have to do a traversal towards the leftmost node until a leaf node is reached.

```
BinarySearchTree.prototype.min = function () {
    if (this.root === null) return;
    let node = this.root;
    while (node.left !== null) {
        node = node.left;
    }
    return node.val;
}
```

#### Building the `max()` method

The maximum value of a Binary Search Tree is value of the rightmost node.

To do this, we have to do a traversal towards the rightmost node until a leaf node is reached.

```
BinarySearchTree.prototype.max = function () {
    if (this.root === null) return;
    let node = this.root;
    while (node.right !== null) {
        node = node.right;
    }
    return node.val;
}
```

## Finding a value

#### Building the `includes(val)` method

This method returns a boolean whether the value passed as argument, exists or not.

**Syntax:**

```
BinarySearchTree.prototype.includes = () {
    while (node !== null) {
      if (val === node.val) return true;
      if (val < node.val) node = node.left;
      else node = node.right;
    }
    return false;
}
```

---

## Height

Height in a tree represents the distance from the root node to any given node.

- **minHeight** - The distance between the root node and _the first node that doesn't have two children_.
- **maxHeight** - The distance between the root node and the _bottom-most node_.

#### Building the **`minHeight()`** method:

```
BinarySearchTree.prototype.minHeight = function (this.root) {
    const getMinHeight = (node, max = 0) => {
      if (node === null) return -1;

      let left = node.left;
      let right = node.right;

      if(left < right) {
        return left + 1;
      } else return right + 1;
    };
}
```

#### Building the `maxHeight()` method:

```
BinarySearchTree.prototype.maxHeight = function (this.root) {
    if (node === null) return -1;

    let leftCount = Math.max(this.maxHeight(node.left));
    let rightCount = Math.max(this.maxHeight(node.right));

    return Math.max(leftCount, rightCount) + 1;
}
```

---

## Balanced Tree

A balanced tree is one where the difference between the `minHeight` and the `maxHeight` is at most 1.

#### Building the `isBalanced()` method:

This method finds out if a Binary Search Tree is balanced.

```
BinarySearchTree.prototype.isBalanced = function (node = this.root) {
    return this.maxHeight(node) - this.minHeight(node)  <= 1;
}
```

---

## Tree Traversal - Introduction

Tree Traversal methods can be used to explore tree data structures and basically find all the values in the tree.

There are two approaches to tree traversal:

1. **Depth-First Search** - In depth-first search, a given subtree is explored as deeply as possible before the search continues on another subtree.

There are three ways Depth-First search can be done:-

- **In-Order Traversal** - In-Order search returns the values of the Binary Search Tree, either in ascending or descending order.
- **Pre-Order Traversal** -
- **Post-Order Traversal** -

2. **Breadth-First Search** - A breadth-first search explores all the nodes in the given level before continuing to the next level.

   - **Level-Order Traversal** -

---

## Tree Traversal - Depth-First Search

#### Building the `inOrder(number)` method to search the Binary Search Tree

In-Order search returns the values of the Binary Search Tree, either in ascending or descending order.

The **`inOrder(number)`** takes in a number value that is either 0 or anything else.
By default this is `0`.
The method returns the values in ascending order if `number <= 0` and in descending order if `number > 0`.

```
               50
             /    \
            /      \
           /        \
          /          \
         /            \
        /              \
       /                \
      40                70
    /    \            /    \
   35    45         60      80
                  /    \
                 /      \
                55      65
                       /
                      63
                     /
                    62
```

> **Result:**
>
> Ascending Order: **[ 35, 40, 45, 50, 55, 60, 62, 63, 65, 70, 80 ]**
>
> Descending Order: **[ 80, 70, 65, 63, 62, 60, 55, 50, 45, 40, 35 ]**

**Procecdure:**

- **For Ascending order**

  - It does a depth-first search, left-first, recursively. What that means is for every node it finds out its left node and returns the value until there is no left node left.
  - Thus, for each node, this is above operation is done for both the left node and the right node with the left node, completing it's operations first (left-first).
  - Since it is a recursive function - the first value is the leftmost value and it goes up from there.

- **For Descending Order**
  - It does a depth-first search, right-first, recursively. What that means is for every node it finds out its right node and returns the value until there is no right node left.
  - Thus, for each node, this is done for both the right node and the left node with the right node, completing it's operations first (right-first).
  - Since it is a recursive function - the first value is the rightmost value and it goes up from there.

**Syntax:**

```
BinarySearchTree.prototype.inOrder = function (order = 0) {
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
      return ascendingOrder(this.root);
    } else {
      function descendingOrder(node) {
        if (node.right !== null) descendingOrder(node.right);
        result.push(node.val);
        if (node.left !== null) descendingOrder(node.left);
        return result;
      }
      return descendingOrder(this.root);
    }
}
```

#### Building the `preOrder()` method to search the Binary Search Tree

This method returns the array of values of the Binary Search in the pre-order.

```
               50
             /    \
            /      \
           /        \
          /          \
         /            \
        /              \
       /                \
      40                70
    /    \            /    \
   35    45         60      80
                  /    \
                 /      \
                55      65
                       /
                      63
                     /
                    62
```

> **Result: [ 50, 40, 35, 45, 70, 60, 55, 65, 63, 62, 80 ]**

**Procedure:**

- Visit the root.
- Traverse the left subtree, i.e., call Preorder(left-subtree)
- Traverse the right subtree, i.e., call Preorder(right-subtree)

**Syntax:**

```
BinarySearchTree.prototype.preOrder = function () {
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
```

#### Building the `postOrder()` method to search the Binary Search Tree

This method returns the array of values of the Binary Search in the post-order.

```
               50
             /    \
            /      \
           /        \
          /          \
         /            \
        /              \
       /                \
      40                70
    /    \            /    \
   35    45         60      80
                  /    \
                 /      \
                55      65
                       /
                      63
                     /
                    62
```

> **Result: [ 35, 45, 40, 55, 62, 63, 65, 60, 80, 70, 50 ]**

**Procedure:**

- Traverse the left subtree, i.e., call Postorder(left-subtree)
- Traverse the right subtree, i.e., call Postorder(right-subtree)
- Visit the root.

**Syntax:**

```
BinarySearchTree.prototype.postOrder = function () {
    if (this.root === null) return null;
    const result = [];
    function postOrderTraversal(node) {
        if(node.left !== null) postOrderTraversal(node.left);
        if(node.right !== null) postOrderTraversal(node.right);
        result.push(node.val);
    }
    return result;
}
```

---

## Tree Traversal - Breadth-First Search

A breadth-first search explores all the nodes in the given level before continuing to the next level. The next level is usually traversed left to right.

#### Building the `levelOrder()` method to search the Binary Tree

```
               50
             /    \
            /      \
           /        \
          /          \
         /            \
        /              \
       /                \
      40                70
    /    \            /    \
   35    45         60      80
                  /    \
                 /      \
                55      65
                       /
                      63
                     /
                    62
```

> **Result: [ 50, 40, 70, 35, 45, 60, 80, 55, 65, 63, 62 ]**

**Procedure:**

- We declare a Queue array to load the current node and a results array to store values.
- We start by adding the root node to the Queue.
- Begin a loop on the Queue where we dequeue the first node in the queue and add it's value to the results array.
- Inspect the node's left node - if it is not null, enqueue this left node.
- Inspect the node's right node - if it is not null, enqueue this right node.
- This process continues until the queue is empty (Q.length === 0).

**Syntax:**

```
BinarySearchTree.prototype.levelOrder = function () {
    if (this.root === null) return null;
    const result = [];
    const Q = [this.root];
    while (Q.length > 0) {
        const node = Q.shift();
        result.push(node.val);
        if (node.left !== null) Q.push(node.left);
        if(node.right !== null) Q.push(node.right);
    }
    return result;
}
```

## Tree Traversal - Use Cases

#### In-Order Traversal

In the case of binary search trees (BST), In-Order traversal gives nodes in non-decreasing order. To get nodes of BST in non-increasing order, a variation of Inorder traversal where Inorder traversal is reversed can be used.

#### Pre-Order Traversal

Preorder traversal is used to create a copy of the tree. Preorder traversal is also used to get prefix expression on an expression tree. Please see http://en.wikipedia.org/wiki/Polish_notation to know why prefix expressions are useful.

#### Post-Order Traversal

Postorder traversal is used to delete the tree. Please see the question for the deletion of a tree for details. Postorder traversal is also useful to get the postfix expression of an expression tree. Please see http://en.wikipedia.org/wiki/Reverse_Polish_notation for the usage of postfix expression.

#### Level-Order Traversal

Breadth-first search can be used to solve many problems in graph theory, for example:

- Copying garbage collection, Cheney's algorithm
- Finding the shortest path between two nodes u and v, with path length measured by number of edges ([an advantage over depth-first search](https://web.archive.org/web/20141029100806/http://opendatastructures.org/versions/edition-0.1e/ods-java/12_3_Graph_Traversal.html#SECTION001531000000000000000))
- (Reverse) Cuthill–McKee mesh numbering
- Ford–Fulkerson method for computing the maximum flow in a flow network
- Serialization/Deserialization of a binary tree vs serialization in sorted order, allows the tree to be re-constructed in an efficient manner.
- Construction of the failure function of the Aho-Corasick pattern matcher.
- Testing bipartiteness of a graph.
- Implementing parallel algorithms for computing a graph's transitive closure.

---
