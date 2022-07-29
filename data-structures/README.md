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

# [Linked List](LinkedList.js)

A Linked List is a data structure where elements are stored in a node. The node contains two pieces of information: 

- The element itself.
- The reference to the next node.

![Linked Lists](https://www.tutorialspoint.com/data_structures_algorithms/images/linked_list.jpg)

As per the above illustration, following are the important points to be considered.

- Linked List contains a link element called **`first`**.
- Each link carries a data field(s) and a link field called **`next`**.
- Each link is linked with its next link using its next link.
- Last link carries a link as `null` to mark the end of the list.

### Types of Linked List

Following are the various types of linked list.

- **Simple Linked List** − Item navigation is forward only.
- **Doubly Linked List** − Items can be navigated forward and backward.
- **Circular Linked List** − Last item contains link of the first element as next and the first element has a link to the last element as previous.


### Comparison between Linked Lists and Arrays

Like arrays, linked lists can be used to implement many other data structures.

Linked Lists have some advantages and disadvantages when compared to arrays:

SN. | Arrays      |	Linked Lists 	|
--- | ---         | ---           |
1 	| Fixed size  | Dynamic Size	|
2 	| Inefficient Insertions and Deletions | Efficient Insertions and Deletions |
3 	| Random access, i.e. efficient indexing | No random access |
4 	| May result in much memory waste | No waste of memory |
5 	| Sequential access is faster. (Reason: Elements in contiguous memory locations) | Sequential access is slow. (Reason: Elements not in contiguous memory locations) |


### Basic Operations

Following are the basic operations supported by a list.

- **Insertion** − Adds an element at the beginning of the list.
- **Deletion** − Deletes an element at the beginning of the list.
- **Display** − Displays the complete list.
- **Search** − Searches an element using the given key.
- **Delete** − Deletes an element using the given key.

**Exercise:**
Build the Linked List from scratch in JavaScript.

```
/** Linked List */

function LinkedList() {
  let length = 0;
  let head = null;

  const Node = function (element) {
    this.element = element;
    this.next = null;
  };

  this.size = function () {
    return length;
  };

  this.head = function () {
    return head;
  };

  /** Adds a new element to the linked list */
  this.add = function (element) {
    const node = new Node(element);
    if (head === null) {
      head = node;
    } else {
      let currentNode = head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }
    length++;
  };

  /** Removes an new element to the linked list */
  this.remove = function (element) {
    let currentNode = head;
    let previousNode;
    if (currentNode.element === element) {
      head = currentNode.next;
    } else {
      while (currentNode.element !== element) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      previousNode.next = currentNode.next;
    }
    length--;
  };

  /** Returns a boolean whether Linked List is empty */
  this.isEmpty = function () {
    return length === 0;
  };

  /** Return the index of the element in the Linked List */
  this.indexOf = function (element) {
    let currentNode = head;
    let index = -1;

    while (currentNode) {
      index++;
      if (currentNode.element === element) return index;
      currentNode = currentNode.next;
    }
    return -1;
  };

  /** Find the element at given index */
  this.elementAt = function (index) {
    let currentNode = head;
    let currentIndex = 0;

    while (currentIndex < index) {
      currentNode = currentNode.next;
      currentIndex++;
    }
    return currentNode.element;
  };

  /** Add the new element at given index */
  this.addAt = function (index, element) {
    const node = new Node(element);
    let currentNode = head;
    let previousNode;
    let currentIndex = 0;

    if (index > length) return;

    if (index === 0) {
      node.next = currentNode;
      head = node;
    } else {
      while (currentIndex < index) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        currentIndex++;
      }
      node.next = currentNode;
      previousNode.next = node;
    }
    length++;
  };

  /** Remove the element at given index */
  this.removeAt = function (index) {
    let currentNode = head;
    let previousNode;
    let currentIndex = 0;

    if (index < 0 || index >= length) return;

    if (index === 0) {
      head = currentNode.next;
    } else {
      while (currentIndex < index) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        currentIndex++;
      }
      previousNode.next = currentNode.next;
    }
    length--;
    return currentNode.element;
  };
}
```

---

# [Trie](Trie.js)

A Trie (pronounced 'try'), sometimes called a Digital Tree or Prefix Tree, is a special type of Tree, used to store associative data structures.

Trie is an efficient information retrieval data structure. Using Trie, search complexities can be brought to optimal limit (key length). If we store keys in a binary search tree, a well balanced BST will need time proportional to M * log N, where M is the maximum string length and N is the number of keys in the tree. Using Trie, we can search the key in O(M) time. However, the penalty is on Trie storage requirements

A Trie stores data in steps. Each step is a node in a trie. It is often used to store words since there are a finite number of letters that can be put together to make a string.

**Possible use case:**

- Validate if a word is in a dictionary
  -  Each step or node would represent one letter of the word. The maximum number of children of a node is equal to the size of the alphabet.

Trie supports search, insert and delete operations in **O(L)** time where **L** is the length of the key. 

![Trie](https://media.geeksforgeeks.org/wp-content/cdn-uploads/Trie.png)

### Advantages:

- With Trie, we can insert and find strings in O(L) time where L represent the length of a single word. This is obviously faster than BST. This is also faster than Hashing because of the ways it is implemented. We do not need to compute any hash function. No collision handling is required (like we do in open addressing and separate chaining)
- Another advantage of Trie is, we can easily print all words in alphabetical order which is not easily possible with hashing.
- We can efficiently do prefix search (or auto-complete) with Trie.

### Disadvantages

The main disadvantage of tries is that they need a lot of memory for storing the strings. For each node we have too many node pointers(equal to number of characters of the alphabet), if space is concerned, then Ternary Search Tree can be preferred for dictionary implementations. In Ternary Search Tree, the time complexity of search operation is O(h) where h is the height of the tree. Ternary Search Trees also supports other operations supported by Trie like prefix search, alphabetical order printing, and nearest neighbor search. 
The final conclusion is regarding tries data structure is that they are faster but require huge memory for storing the strings.

**Exercise:**
Build the Trie from scratch in JavaScript.

```
** Trie Data Structure */

const Node = function () {
  this.keys = new Map();
  this.end = false;
  this.setEnd = function () {
    this.end = true;
  };
  this.isEnd = function () {
    return this.end;
  };
};

const Trie = function () {
  this.root = new Node();

  /** Add a word to the Trie */
  this.add = function (input, node = this.root) {
    if (input.length === 0) {
      node.setEnd();
      return;
    } else if (!node.keys.has(input[0])) {
      node.keys.set(input[0], new Node());
      return this.add(input.slice(1), node.keys.get(input[0]));
    } else {
      return this.add(input.slice(1), node.keys.get(input[0]));
    }
  };

  /** Finds a word is present in the Trie. Returns boolean. */
  this.find = function (input) {
    let node = this.root;
    while (input.length > 1) {
      if (!node.keys.has(input[0])) {
        return false;
      } else {
        node = node.keys.get(input[0]);
        input = input.slice(1);
      }
    }
    return node.keys.has(input) && node.keys.get(input).isEnd() ? true : false;
  };

  /** Print all the words in the Trie */
  this.print = function () {
    const words = [];
    const search = function (node, string) {
      if (node.keys.size !== 0) {
        for (const letter of node.keys.keys()) {
          search(node.keys.get(letter), string.concat(letter));
        }
        if (node.isEnd()) {
          words.push(string);
        }
      } else {
        string.length > 0 ? words.push(string) : undefined;
        return;
      }
    };
    search(this.root, '');
    return words.length > 0 ? words : null;
  };
};
```

---

# Heap

A Binary Heap is a partially ordered binary tree which satisfies the Heap property. It has some similarities to the Binary Search Tree, except the order is a little different:

- Each node has at most two child nodes - the heap property indicates a specific relationship between the parent and child nodes:
  - Max-Heap - You may have a max-heap in which all parent nodes are >= child nodes.

  ![Max Heap](https://www.tutorialspoint.com/data_structures_algorithms/images/max_heap_example.jpg)
  
  - Min-Heap - You may have a min-heap in which all parent nodes are <= child nodes.

  ![Min Heap](https://www.tutorialspoint.com/data_structures_algorithms/images/min_heap_example.jpg)

Binary Heaps are also complete binary trees, meaning, all levels of the tree are fully filled and if the last level is partially filled, it is filled from left-to-right.

Binary Heaps may be implemented as tree structures with nodes that contain left and right references just like the Binary Search Tree. 

However, Heaps are more often implemented as arrays. This is possible because of the partial ordering because of the heap property. We can just compute the parent-child relationship of the elements.

### Heap Sort
A common use for the heap data structure is the Heap Sort. This is one of the most efficient sorting algorithms with average and worst-case performance of `O(n log n)`.

When sorting in ascending order,
Heap sort works by taking an unsorted array, adding each item of the array into a Min Heap and then extracting every item of the Min Heap into the new Array. The min Heap structure ensures that the new array will contain the original items in least to greatest order.

### Heap Visualization

One can check the Heap visualization here - https://www.cs.usfca.edu/~galles/visualization/Heap.html

**Exercise - Min Heap:**
Build the Min Heap from scratch in JavaScript.

```
/** Heap */
// Left Child: i * 2
// Right Child: i * 2 + 1
// Parent = i / 2

const minHeap = function () {
  const heap = [null];

  /** Insert an element into the heap */
  this.insert = function (num) {
    heap.push(num);
    if (heap.length > 2) {
      let indx = heap.length - 1;
      while (heap[indx] < heap[Math.floor(indx / 2)]) {
        if (indx >= 1) {
          // Swap
          [heap[Math.floor(indx / 2)], heap[indx]] = [
            heap[indx],
            heap[Math.floor(indx / 2)],
          ];
          if (Math.floor(indx / 2) > 1) {
            // if Parent Node is greater than Root Node
            indx = Math.floor(indx / 2);
          } else {
            break;
          }
        }
      }
    }
  };

  /** Remove the smallest element from the heap */
  this.remove = function () {
    let smallest = heap[1];
    if (heap.length > 2) {
      heap[1] = heap[heap.length - 1];
      heap.splice(heap.length - 1);

      if (heap.length === 3) {
        if (heap[1] > heap[2]) {
          // swap
          [heap[1], heap[2]] = [heap[2], heap[1]];
        }
        return smallest;
      }

      // When heap.length >= 4
      let i = 1;
      let left = 2 * i;
      let right = 2 * i + 1;

      while (heap[i] >= heap[left] || heap[i] >= heap[right]) {
        if (heap[left] < heap[right]) {
          [heap[i], heap[left]] = [heap[left], heap[i]];
          i = 2 * i;
        } else {
          [heap[i], heap[right]] = [heap[right], heap[i]];
          i = 2 * i + 1;
        }
        left = 2 * i;
        right = 2 * i + 1;
        if (heap[left] === undefined || heap[right] === undefined) {
          break;
        }
      }
    } else if (heap.length === 2) {
      heap.splice(1, 1);
    } else {
      return null;
    }
    return smallest;
  };

  /** Heap Sort - Ascending Order */
  this.sort = function () {
    const sortedArray = [];
    while (heap.length > 1) {
      sortedArray.push(this.remove());
    }
    return sortedArray;
  };
};
```

---

# Graphs

Graphs are collections of things and the relationships or connections between them. The data in a graph are called nodes or **vertices**. The connection between the **vertices** are called **edges**.

One example of a graph is a social network, where the vertices are you and other people and the edges are whether two people are friends with each other.

### Types of Graphs

There are two major types of Graphs:

- Directed - Graphs with a direction on the edges between the vertices. E.g. Internet and web page links
- Undirected - Graphs without any direction on the edges between the vertices. E.g. social network

### Ways to represent a Graph

1. **Adjacency List** - This representation of a graph associates each vertex in the graph with the collection of its neighbouring vertices or edges.
2. **Adjacency Matrix** - An Adjacency Matrix is a two-dimensional array where each nested array has the same number of elements as the outer array. It's a matrix of numbers where the numbers represent the edges. **`0`**s mean there is no edges or relationship and **`1`**s mean there is a relationship.
3. **Incidence Matrix** - Like the adjacency matrix, the incidence matrix is a two-dimensional array. However, the rows and columns mean something else in the incidence matrix. The adjacency matrix uses both rows AND columns to represent vertices. The Incidence Matrix uses rows to represent vertices and the columns to represent edges. This means, we can have an uneven number of rows and columns. Each column would represent an unique edge. Also, each edge connects two vertices. To show that there is an edge between two nodes, we put a 1 in the two rows of a particular column.
For a directed graph, we use 1 for an edge leaving a particular vertex and -1 for an edge entering a node.

Graphs can also have weights on their edges. So far, we saw graphs with unweighted edges where just the presence and lack of edge is binary, 0 and 1. We can have different weights based on the application. A different weight is represented by a number greater than 1.

### Basic Operations

Following are basic primary operations of a Graph −

- **Add Vertex** − Adds a vertex to the graph.

- **Add Edge** − Adds an edge between the two vertices of the graph.

- **Display Vertex** − Displays a vertex of the graph.


---

# References 

1. [Advantages of BST over Hash Table](https://www.geeksforgeeks.org/advantages-of-bst-over-hash-table/)
2. [Linked List](https://www.tutorialspoint.com/data_structures_algorithms/linked_list_algorithms.htm)
3. [Trie](https://www.geeksforgeeks.org/trie-insert-and-search/) | [Applications of Trie](https://www.geeksforgeeks.org/advantages-trie-data-structure/)
4. [Heap](https://www.tutorialspoint.com/data_structures_algorithms/heap_data_structure.htm) | [Visualization](https://www.cs.usfca.edu/~galles/visualization/Heap.html)
5. [JavaScript Data Structures](https://github.com/datastructures-js)