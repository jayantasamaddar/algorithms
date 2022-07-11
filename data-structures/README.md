# What are Data Structures?

Data Structures are the programmatic way of storing data so that data can be used efficiently.

---

# Why to Learn Data Structure and Algorithms?

As applications are getting complex and data rich, there are three common problems that applications face now-a-days.

- **Data Search** − Consider an inventory of 1 million(106) items of a store. If the application is to search an item, it has to search an item in 1 million(106) items every time slowing down the search. As data grows, search will become slower.

- **Processor speed** − Processor speed although being very high, falls limited if the data grows to billion records.

- **Multiple requests** − As thousands of users can search data simultaneously on a web server, even the fast server fails while searching the data.

To solve the above-mentioned problems, data structures come to rescue. Data can be organized in a data structure in such a way that all items may not be required to be searched, and the required data can be searched almost instantly.

---

# Types of Data Structures

The various types of Data Structures are:-

- Stack
- Array
- Set
- Queue
  - Priority Queue
- Tree
  - Binary Search Tree
  - AVL Tree
  - Spanning Tree
- Hash Table
- Linked List
- Heap
- Graph

We will illustrate taking **`JavaScript`** as the programming language of choice.

## [Stack](Stack.js)

A stack is a linear data structure that follows the principle of Last In First Out (LIFO). This means the last element inserted inside the stack is removed first. You can think of the stack data structure as the pile of plates on top of another.

**Examples:**

- A Stack of Books. The last book placed on top of the stack is the first book out.
- The browser's Back Button. The last URL visited is the first URL visited when clicking the Back Button.

**Stack Methods:**

- **`push`** - To place an element on a Stack.

  - In JavaScript (using Array): `Array.push()`

- **`pop`** - To take out the top element of the stack.

  - In JavaScript (using Array): `Array.pop()`

- **`peek`** - To displaying the top element of the stack.

  - In JavaScript (using Array): `Array[Array.length - 1]`

- **`length`** - To determine how many elements are there on a stack.
  - In JavaScript (using Array): `Array.length`

**Example:**
Find if a word is a palindrome using the Stack Data Structure.

```
function isPalindrome(word) {
    const stack = [];
    let rword = "";

    for(let i = 0; i < word.length; i++) {
        stack.push(word[i]);
    }

    for(let i = 0; i < word.length; i++) {
        rword += stack.pop();
    }

    if(rword === word) return true;
    else return false;
}
```

**Exercise:**
Create a Stack class from scratch in JavaScript

```
const Stack = function() {
    this.count = 0;
    this.storage = {};

    this.push = function(value) {
        this.storage[this.count++] = value;
    }

    this.pop = function() {
        if(this.count === 0) return undefined;

        this.count--;
        const result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    this.size = function() {
        return this.count;
    }

    this.peek = function() {
        return this.storage[this.count - 1];
    }
}
```

---

## [Set](Set.js)

The Set data structure is an Array-like data structure, except there are no duplicate elements and the values are not in any particular order. The typical use for the Set is to simply check the presence of an element. JavaScript comes with an in-built Set class, however it doesn't contain all the methods that pertain to Sets.

**Set Methods:**

- **`has`** - Returns a boolean value whether the Set has the element.

  - In JavaScript (using Set): `Set.has(element)`

- **`add`** - To add an unique element to the Set.

  - In JavaScript (using Set): `Set.add(element)`

- **`delete`** - To delete an existing element from the Set.

  - In JavaScript (using Set): `Set.delete(element)`

- **`size`** - To determine the length of the Set.

  - In JavaScript (using Set): `Set.size`

- **`union`** - Returns the union of two Sets as a new Set.

  - Not built-in JavaScript ES6 Set

- **`intersection`** - Returns the intersection of two Sets as a new Set.

  - Not built-in JavaScript ES6 Set

- **`difference`** - Return the difference between the first Set (A) and the second Set (B) as A - B.

  - Not built-in JavaScript ES6 Set

- **`subset`** - Test if the first Set is the subset of the second Set.
  - Not built-in JavaScript ES6 Set

**Exercise:**
Create a modSet (modified Set) class from scratch in JavaScript that contains all Set methods.

```
const modSet = function () {
  /** Holds the Set */
  const collection = [];

  /** Returns a boolean whether Set contains element */
  this.has = function (element) {
    return collection.indexOf(element) !== -1;
  };

  /** ES6 Set returns an iterator which can then be used to iterate through all values in the Set */
  /** Returns all the values of the Set */
  this.values = function () {
    return collection;
  };

  /** Adds an unique element to the Set */
  this.add = function (element) {
    if (!this.has(element)) collection.push(element);
    return collection;
  };

  /** Deletes an element from the Set */
  this.delete = function (element) {
    if (!this.has(element)) return undefined;
    collection.splice(collection.indexOf(element), 1);
  };

  /** In ES6 size is a property and not a method */
  /** Returns all the values of the Set */
  this.size = function () {
    return collection.length;
  };

  /** THESE BELOW METHODS ARE NOT PART OF ES6 Set */

  /** Returns the union of two Sets as a new Set */
  this.union = function (otherSet) {
    const unionSet = new modSet();
    const firstSet = this.values();
    const secondSet = otherSet.values();

    for (let i = 0; i < firstSet.length; i++) {
      unionSet.add(firstSet[i]);
    }

    for (let i = 0; i < secondSet.length; i++) {
      unionSet.add(secondSet[i]);
    }

    return unionSet;
  };

  /** Return the intersection of two Sets as a new Set */
  this.intersection = function (otherSet) {
    const intersectionSet = new modSet();
    const firstSet = this.values();

    for (let i = 0; i < firstSet.length; i++) {
      if (otherSet.has(firstSet[i])) intersectionSet.add(firstSet[i]);
    }

    return intersectionSet;
  };

  /** Return the difference between the first Set (A) and the second Set (B) as A - B */
  this.difference = function (otherSet) {
    const differenceSet = new modSet();
    const firstSet = this.values();

    for (let i = 0; i < firstSet.length; i++) {
      if (!otherSet.has(firstSet[i])) differenceSet.add(firstSet[i]);
    }

    return differenceSet;
  };

  /** Test if the first Set is the subset of the second Set */
  this.subset = function (otherSet) {
    const firstSet = this.values();

    return firstSet.every(function (e) {
      return otherSet.has(e);
    });
  };
};
```

---

## [Queue](Queue.js)

Queue is an abstract data structure, somewhat similar to Stacks.
Unlike stacks, a queue is open at both its ends. One end is always used to insert data (enqueue) and the other is used to remove data (dequeue). Queue follows First-In-First-Out methodology, i.e., the data element stored first will be accessed first.

**Real-World Examples:**

- A single-lane one-way road, where the vehicle enters first, exits first.
- Queues at the ticket windows and bus-stops. First come, first serve.
- Printer printing documents. The prints are printed in the order they were sent to the print queue.

**Exercise:**
Create a Queue class from scratch in JavaScript that contains all Queue methods.

```
const Queue = function () {
  const collection = [];

  /** Prints the Queue onto the console */
  this.print = function () {
    console.log(collection);
  };

  /** Insert an element onto the Queue */
  this.enqueue = function (element) {
    collection.push(element);
    return collection;
  };

  /** Remove an element from the Queue and returns it */
  this.dequeue = function () {
    return collection.shift();
  };

  /** Returns the first element of the Queue without removing it */
  this.front = function () {
    return collection[0];
  };

  /** Returns the length of the Queue */
  this.size = function () {
    return collection.length;
  };

  /** Returns a Boolean value whether the Queue contains no elements */
  this.isEmpty = function () {
    return collection.length === 0;
  };
};
```

---

## [Priority Queue](PriorityQueue.js)

A priority queue is a special type of queue in which each element is associated with a priority value. And, elements are served on the basis of their priority. That is, higher priority elements are served first.

Everything else is the exact same as the normal queue except the `enqueue` method.

**Exercise:**
Create a PriorityQueue class from scratch in JavaScript that contains all PriorityQueue methods.

```
const PriorityQueue = function () {
  const collection = [];

  /** Prints the Queue onto the console */
  this.print = function () {
    const result = [];
    for (let i = 0; i < collection.length; i++) {
      result.push(collection[i][0]);
    }
    return result;
  };

  /** Insert an item onto the Queue */
  this.enqueue = function (item) {
    if (this.isEmpty()) {
      collection.push(item);
    } else {
      let added = false;
      for (let i = 0; i < collection.length; i++) {
        // Check if priority is higher, then insert item before the item in the collection
        if (item[1] < collection[i][1]) {
          collection.splice(i, 0, item);
          added = true;
          break;
        }
      }
      if (!added) collection.push(item);
    }
    return collection;
  };

  /** Remove an item from the Queue and returns it */
  this.dequeue = function () {
    return collection.shift()[0];
  };

  /** Returns the first item of the Queue without removing it */
  this.front = function () {
    return collection[0][0];
  };

  /** Returns the length of the Queue */
  this.size = function () {
    return collection.length;
  };

  /** Returns a Boolean value whether the Queue contains no items */
  this.isEmpty = function () {
    return collection.length === 0;
  };
};
```

---

## [Binary Search Tree](BinarySearchTree.js)

Binary Search Tree is a node-based binary tree data structure:

### Terminology related to Trees in general:

- **Nodes** - The data points in a tree are called nodes.
- **Root Node** - The topmost node is called the root node.
- **Parent Node** - A node with branches leading to other nodes (subtree) is called a parent node.
- **Child Node** - A node with a parent node is called a child node. Children are parents of their own subtree.
- **Leaf Node** - A node that do not have any children is called a Leaf Node.
- **Siblings** - Nodes sharing the same parent node.

### Binary Tree

A tree can have any number of branches for a single node. However a Binary Tree can have only two branches for every single node.

### Binary Search Tree

A Binary Search Tree is a specific type of a binary tree that has the following properties

- The left subtree of a node contains only nodes with keys <= the node’s key.
- The right subtree of a node contains only nodes with keys >= the node’s key.
- The left and right subtree each must also be a binary search tree.

![Binary Search Tree](https://media.geeksforgeeks.org/wp-content/uploads/BSTSearch.png)

**Exercise:**
Implement the Binary Search Tree using JavaScript classes.

```
const Node = function (data, left = null, right = null) {
  this.data = data;
  this.left = left;
  this.right = right;
};

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
}
```

---

### Binary Search Tree - Traversal and Height

#### Height

Height in a tree represents the distance from the root node to any given leaf node.

- **minHeight** - The distance between the root node and the first node that doesn't have two children.
- **maxHeight** - The distance between the root node and the bottom-most node.
- **Balanced Tree** - A balanced tree is one where the difference between the `minHeight` and the `maxHeight` is at most 1.

#### Traversal

Tree Traversal methods can be used to explore tree data structures and basically find all the values in the tree.

##### Depth-First Search

In depth-first search, a given subtree is explored as deeply as possible before the search continues on another subtree.

There are three ways Depth-First search can be done:-

- In-Order Traversal
- Pre-Order Traversal
- Post-Order Traversal

##### Breadth-First Search

A breadth-first search explores all the nodes in the given level before continuing to the next level.

- **Level-Order Traversal**
  - We start by adding the root node to a queue
  - Begin a loop where we dequeue the first item in the queue and add it to the new array.
  - Inspect both its child subtrees - if the children are not null, they are each enqueued.
  - This process continues until the queue is empty.

**Full Binary Search Tree with Height and Traversal**

```
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
      function traverseInOrder(node) {
        result.push(node.data);
        node.left && traverseInOrder(node.left);
        node.right && traverseInOrder(node.right);
      }
      traverseInOrder(this.root);
      return result;
    }
  }

  /** Pre-Order Search */
  postOrder() {
    if (this.root === null) return null;
    else {
      const result = [];
      function traverseInOrder(node) {
        node.left && traverseInOrder(node.left);
        node.right && traverseInOrder(node.right);
        result.push(node.data);
      }
      traverseInOrder(this.root);
      return result;
    }
  }

  /** Pre-Order Search */
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
```

---

# Hash Table

A Hash Table is a data structure used to implement associative arrays or mappings of key-value pairs.

Hash Tables are a common way to implement the map data structure or objects. They are widely used because of how efficient they are. The average time for each lookup is not tied to the number of elements in the table. Hash Table uses an array as a storage medium and uses hash technique to generate an index where an element is to be inserted or is to be located from.

The average time complexity in Big O' Notation is O(1) for Search, Insert and Delete. That's very fast!

### Hashing

Hashing is a technique to convert a range of key values into a range of indexes of an array. We're going to use modulo operator to get a range of key values. Consider an example of hash table of size 20, and the following items are to be stored. Item are in the (key,value) format.

![Hashing](https://www.tutorialspoint.com/data_structures_algorithms/images/hash_function.jpg)

- (1,20)
- (2,70)
- (42,80)
- (4,25)
- (12,44)
- (14,32)
- (17,11)
- (13,78)
- (37,98)

SN. | Key   |	Hash 	        | Array Index
--- | ---   | ---           | ---
1 	| 1     | 1 % 20 = 1	  | 1
2 	| 2 	  | 2 % 20 = 2    | 2
3 	| 42 	  | 42 % 20 = 2 	| 2
4 	| 4 	  | 4 % 20 = 4 	  | 4
5 	| 12 	  | 12 % 20 = 12 	| 12
6 	| 14 	  | 14 % 20 = 14 	| 14
7 	| 17 	  | 17 % 20 = 17 	| 17
8 	| 13 	  | 13 % 20 = 13 	| 13
9 	| 37 	  | 37 % 20 = 17 	| 17

### Linear Probing

As we can see, it may happen that the hashing technique is used to create an already used index of the array. In such a case, we can search the next empty location in the array by looking into the next cell until we find an empty cell. This technique is called linear probing.

SN. | Key   |	Hash 	        | Array Index   | Array Index (after Linear Probing)
--- | ---   | ---           | ---           | ---
1 	| 1     | 1 % 20 = 1	  | 1             | 1
2 	| 2 	  | 2 % 20 = 2    | 2             | 2
3 	| 42 	  | 42 % 20 = 2 	| 2             | 3
4 	| 4 	  | 4 % 20 = 4 	  | 4             | 4
5 	| 12 	  | 12 % 20 = 12 	| 12            | 12
6 	| 14 	  | 14 % 20 = 14 	| 14            | 14
7 	| 17 	  | 17 % 20 = 17 	| 17            | 17
8 	| 13 	  | 13 % 20 = 13 	| 13            | 13
9 	| 37 	  | 37 % 20 = 17 	| 17            | 18

### Basic Operations

Following are the basic primary operations of a hash table.

- **Search** − Searches an element in a hash table.

- **Insert** − inserts an element in a hash table.

- **Delete** − Deletes an element from a hash table.


**Exercise:**
Build the Hash Table from scratch in JavaScript.

```
/** Hash Table */

const hash = (string, max) => {
  let key = 0;
  for (let i = 0; i < string.length; i++) {
    key += string.charCodeAt(i);
  }
  return key % max;
};

const HashTable = function () {
  const storage = [];

  const storageLimit = 4;

  this.print = function () {
    console.log(storage);
  };

  /** Add Element to Hash Table */
  this.add = function (key, value) {
    var index = hash(key, storageLimit);

    if (storage[index] === undefined) {
      storage[index] = [[key, value]];
    } else {
      let inserted = false;
      for (let i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          storage[index][i][1] === value;
          inserted = true;
        }
      }
      if (inserted === false) {
        storage[index].push([key, value]);
      }
    }
  };

  /** Remove Element from Hash Table */
  this.remove = function (key) {
    var index = hash(key, storageLimit);

    if (storage[index].length && storage[index][0][0] === key) {
      delete storage[index];
    } else {
      for (let i = 0; i < storage[index]; i++) {
        if (storage[index][i][0] === key) {
          delete storage[index][i];
        }
      }
    }
  };

  /** Lookup Element in Hash Table */
  this.lookup = function (key) {
    var index = hash(key, storageLimit);

    if (storage[index] === undefined) return;
    else {
      for (let i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          return storage[index][i][1];
        }
      }
    }
  };
};
```

Where,

- `string` - The string we are going to hash.
- `max` - The number of buckets that we are using in our hash table to store values.
- `key` - An integer between 0 and 65535 representing the UTF-16 code unit at the given index. The charCodeAt() method returns this value of the given index of the string.

---

# Linked List

