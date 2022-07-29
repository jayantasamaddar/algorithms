# What is a Linked List?

A Linked List is a data structure where elements are stored in a node. The node contains two pieces of information: 

- The element itself.
- The reference to the next node.

![Linked Lists](https://www.tutorialspoint.com/data_structures_algorithms/images/linked_list.jpg)

As per the above illustration, following are the important points to be considered.

- The first node of the Linked List is called the **`head`**.
- Each node carries a **`val`** field for it's value and a link field called **`next`**.
- Each node is linked with its next node using its **`next`** link.
- The last node of a linked list is a node which has its next point to **`null`**.

---

# Types of Linked List

Following are the various types of linked list.

- **Simple Linked List** − Item navigation is forward only.
- **Doubly Linked List** − Items can be navigated, new items added or removed from both sides.
- **Circular Linked List** − Last item contains link of the first element as next and the first element has a link to the last element as previous.

---

# Comparison between Linked Lists and Arrays

Like arrays, linked lists can be used to implement many other data structures.

Linked Lists have some advantages and disadvantages when compared to arrays:

SN. | Arrays      |	Linked Lists 	|
--- | ---         | ---             |
1 	| Fixed size  | Dynamic Size	|
2 	| Inefficient Insertions and Deletions - O(n) | Efficient Insertions and Deletions - O(1) |
3 	| Random access, i.e. efficient indexing | No random access |
4 	| May result in much memory waste | No waste of memory |
5 	| Sequential access is faster. (Reason: Elements in contiguous memory locations) | Sequential access is slow. (Reason: Elements not in contiguous memory locations) |

---

# Properties

**`head`** − (type: property) - Returns the head of the Linked List and all linked nodes.
**`size`** − (type: property) - Displays the length of the Linked List.

---

# Operations

### Basic operations supported by a Linked List.

- **`add`** - Add element(s) to the end of the Linked List.
- **`addFirst`** - Add element(s) to the start of the Linked List.
- **`insertAt`** − Adds an element at a specific index of the list.
- **`remove`** − Removes the first matching element from the list.
- **`removeFirst`** - Removes the first node of the Linked List.
- **`removeLast`** - Removes the last node of the Linked List.
- **`removeAt`** - Removes an element at a specific index.
- **`nodeAt`** - Returns the node at the given index.
- **`elementAt`** - Returns the value of the node at the given index.
- **`indexOf`** − Returns the index of the first occurence of the element. If not found returns -1.
- **`lastIndexOf`** - Returns the index of the last occurence given element. If not found returns -1.
- **`isEmpty`** - Returns a Boolean, whether Linked List is empty or not.
- **`hasCycle`** - Returns a Boolean, whether Linked List has a Cycle. There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the `next` pointer.

### Advanced operations supported by a Linked List.

- **`toArray`** - Return node values in an array.
- **`forEach`** - Traversal through the Linked List and perform some operation for each Node.
- **`filter`** - Filter a Linked List and return a new filtered Linked List.
- **`concat`** - Concatenate multiple Linked Lists to a single Linked List.
- **`reverse`** - Reverse the order of a Linked List.
- **`find`** - Find whether a value exists in the linked list. Takes in a callback function. Returns a boolean.
- **`findIndex`** - Traverses through the Linked List and evaluates the callback function as `true` or `false` and returns the index when `true`. If none of the nodes return true, returns `-1`.
- **`LinkedList.fromArray`** - Create a new Linked List from an Array.

---

## Add

#### Building the `add(...elements)` function to add elements to the Linked List:

We will be using the `ListNode` class to create Nodes.

```
LinkedList.prototype.add = function(...elements) {
    for(const element of elements) {
        const node = new ListNode(element);
        let currentNode = this.head;

        if(currentNode === null) {
            this.head = node;
        } else {
            while(currentNode !== null) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
        this.size++;
    }
}
```

#### Building the `addFirst` method that adds an element to the beginning of the Linked List:

```
LinkedList.prototype.addFirst = function(element) {
    if(element === null) return;
    const node = new ListNode(element);

    if(this.head === null) {
        this.head = node;
    } else {
        node.next = this.head;
        this.head = node;
    }
    this.size++;
}
```

---

## Insert

#### Array - O(n) Insertion Time
Suppose we have an array, `[1, 3, 13, 21]`. We want to `1` element: `5` at index `2`. 
We can do that with the splice operation, `array.splice(2, 0, 5)`;

**But how does it work?**
The way it works in an array is, the array assumes there is space at the end of the array, i.e. at index `4` (which currently doesn't exist) and shifts the indices after `2` right, one-by-one, by `1` indices to create space for the insertion of the `1` new element: `5`. This is because, in an array, elements are contiguous in memory.

This can be a costly operation if the number of elements after the index `2` are many, e.g. over 1000. Thus, insertions in an array are expensive.

#### Linked Lists - O(1) Insertion Time

In Linked Lists, we just need to create a new list Node in memory to hold the value `5` and adjust it's `next` pointer to the previous node's (i.e. node with the value `3`) `next` pointer. Then, the previous node's `next` pointer may be given a new value to point to this new list Node. 

Thus, the linked List is sequenced to point to one element after another including this new insertion without any costly insertions. In a Linked List, it is not required that the nodes are contiguous in memory.

Let's try to implement a `LinkedList.prototype.insertAt(index, value)`. 
We will need to create a ListNode using our `ListNode` class, created earlier. We will also reference the LinkedList's `size` property and the `head`.

#### Inserting element into a Linked List at a certain index

```
class ListNode {
    constructor(val = null, next = null) {
        this.val = val;
        this.next = next;
    }
}

LinkedList.prototype.insertAt = function(index, val) {
    if(index > this.size || index < 0) return;

    const node = new ListNode(val);
    let currentNode = this.head;
    if(index === 0) {
        node.next = currentNode;
        this.head = node;
    } else {
        let currentIndex = 0;
        let previousNode = null;

        while(currentNode !== null && currentIndex < index) {
            previousNode = currentNode;
            currentNode = currentNode.next;
            currentIndex++;
        }
        if(currentNode === null) return;
        node.next = currentNode;
        previousNode.next = node;
    }
    this.size++;
}
```

---

## Remove

#### Building the `remove(element)` method:

This method removes the `element` passed as params from the Linked List, if it is found. If not found, it does nothing.

```
LinkedList.prototype.remove = function(element) {
    if(this.head === null) return;

    let currentNode = this.head;
    let previousNode = null;
    if(currentNode.val === element) {
        this.head = currentNode.next;
    } else {
        while(currentNode !== null && currentNode.val !== element ) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        if(currentNode === null) return;
        previousNode.next = currentNode.next;
    }
    this.size--;
    return currentNode.val;
}
```

#### Building the `removeFirst()` method:

This method removes the first element from the Linked List.

```
LinkedList.prototype.removeFirst = function () {
    if(this.head === null) return;
    const head = this.head;
    this.head = this.head.next;
    this.size --;
    return head.val;
}
```

### Building the `removeLast()` method:

This method removes the last element from the Linked List.

```
LinkedList.prototype.removeLast = function() {
    if(this.head === null) return;
    let currentNode = this.head;
    let previousNode = null;
    let removedElement = null;
    while(currentNode.next !== null) {
        previousNode = currentNode;
        currentNode = currentNode.next;
    }
    if(previousNode === null) {
        this.head = previousNode;
    }
    else {
        previousNode.next = null;
    }
    this.size--;
    return currentNode.val;
}
```

#### Building the `removeAt(index)` method:

This method removes the element at the said index.

```
LinkedList.prototype.removeAt = function (index) {
    if(index >= this.size || index < 0 || this.head === null) return;

    let currentNode = this.head;
    let previousNode = null;
    let currentIndex = 0;

    if(index === 0) {
        this.head = currentNode.next;
    } else {
        while(currentNode !== null && currentIndex < index) {
            previousNode = currentNode;
            currentNode = currentNode.next;
            currentIndex++;
        }
        if(currentNode === null) return;
        previousNode.next = currentNode.next;
    }
    this.size--;
    return currentNode.val;
}
```

---

## Linked List Traversal

If we want to pass a Linked List to someone, or programmatically pass a Linked List to a function, we only need to pass a reference to the `head` node of the Linked List. That is because, just with the `head` node of a Linked List, by accessing the `next` property of every node, we can fully access the sequential Linked List.

So to implement a traversal algorithm on a linked list, we just need a handful of variables. We traverse the linked list by looping through the nodes until currentNode is null. To progress down the loop, we assign the `currentNode` to `currentNode.next` at the end of each iteration. This works similar to the looping of an array where we add +1 to the index to progress down the array.

#### Building a `toArray` method by traversing a linked list and returning the values of the nodes in an array:**

```
LinkedList.prototype.toArray = function() {
    const array = [];
    let currentNode = list.head;
    while(currentNode !== null) {
        array.push(currentNode.val)
        currentNode = currentNode.next;
    }
    return array;
}
```

#### Building a `forEach` method that traverses through the linked list and executes a callback:

We have the `Array.prototype.forEach(element, index, callbackFn)` method to loop through an array. This traverses through the entire array and does something as per the callback function.

Let's try to implement this same method for our Linked List as,
`LinkedList.prototype.forEach(node, index, callbackFn)`

```
LinkedList.prototype.forEach = function (callbackFn) {
    if (typeof callbackFn !== 'function') {
      throw new Error(
        'LinkedList.forEach(callbackFn), expects a callback function'
      );
    }
    let currentIndex = 0;
    let currentNode = this.head;
    while(currentNode !== null) {
        callbackFn(currentNode, currentIndex);
        currentNode = currentNode.next;
        currentIndex++;
    }
}
```

#### Building a `filter` method that traverses through the Linked List and filters out Nodes based on a callback function. Returns a new Linked List:

We have the `Array.prototype.filter(element, index, callbackFn)` method to filter through an array. This traverses through the entire array and filters as per the callback function.

Let's try to implement this same method for our Linked List as, 
`LinkedList.prototype.filter(node, index, callbackFn)`.

Since we are returning a new Linked List, we will require the `Linked List` class. We will also need to refer to the `head` of the linked list we are filtering.

```
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
}
```

**Method 1 - Building from Scratch**
```
LinkedList.prototype.filter = function (callbackFn) {
    if(!typeof callbackFn === "function") {
        throw new Error('LinkedList.filter(callbackFn), expects a callback function')
    }
    const newList = new LinkedList();
    let currentNode = this.head;
    let currentIndex = 0;

    while(currentNode !== null) {
        if(callbackFn(currentNode, currentIndex)) newList.add(currentNode.val);
        currentNode = currentNode.next;
        currentIndex++
    }
    return newList;
}
```

**Method 2 - Using the `forEach` method we built earlier**
```
LinkedList.prototype.filter = function (callbackFn) {
    if(!typeof callbackFn === "function") {
        throw new Error('LinkedList.filter(callbackFn), expects a callback function')
    }
    const newList = new LinkedList();

    this.forEach((node, index) => {
        if(!callbackFn(node, index)) return;
        newList.add(node.val);
    });
    return newList;
}
```

#### Building a `reverse` method to reverse a Linked List:

We do this by basically flipping positions of the previousNode and currentNode and progressing the loop further until we reach the last node. So for every iteration of the loop, the next element becomes the current element and the previous element becomes the next.

```
LinkedList.prototype.reverse = function() {
    if(this.head === null) return;

    let currentNode = this.head;
    let previousNode = null;

    while(currentNode !== null) {
        const next = currentNode.next;
        currentNode.next = previousNode;
        previousNode = currentNode;
        currentNode = next;
    }
    this.head = previousNode;
    return this;
}
```

#### Building the `concat(...linkedLists)` method.

This method concatenates multiple Linked Lists together to the original Linked List on which the method is called. (Similar to Array concatenation)

Syntax: `LinkedList.prototype.concat(linkedListA, linkedListB, ....linkedLists)`

```
/**
 * Concatenate Multiple Linked Lists
 *
 * @param  {...LinkedList} linkedLists - takes LinkedList(s) as arguments
 * @returns {ListNode} - returns the head ListNode of the LinkedList
*/
LinkedList.prototype.concat = function (...linkedLists) {
    let currentNode = this.head;

    for(const list of linkedLists) {
        if(!list instanceof LinkedList) {
            throw new Error('Expected LinkedList as function argument');
        }
        while(currentNode.next !== null) {
            currentNode = currentNode.next;
        }
        currentNode.next = list.head;
        currentNode = currentNode.next;
    }
    return this.head;
}
```

#### Building a `findIndex` method and `find` method.

###### The `findIndex` method traverses the Linked List and returns the current index if the callback evaluates to true on any node or `-1`.

```
LinkedList.prototype.findIndex = function (callbackFn) {
    if (!typeof callbackFn !== 'function') {
      throw new Error(
        'LinkedList.findIndex(callbackFn), expects a callback function'
      );
    }
    let currentNode = this.head;
    let currentIndex = 0;
    while (currentNode !== null) {
      if (callbackFn(currentNode, currentIndex)) return currentIndex;
      currentNode = currentNode.next;
      currentIndex++;
    }
    return -1;
}
```

###### The `find` method traverses the Linked List and returns true if the callback evaluates to true or false if it doesn't evaluate to true on any of the nodes.

```
LinkedList.prototype.find = function (callbackFn) {
    if (!typeof callbackFn !== 'function') {
      throw new Error(
        'LinkedList.find(callbackFn), expects a callback function'
      );
    }
    let currentNode = this.head;
    let currentIndex = 0;
    while (currentNode !== null) {
      if (callbackFn(currentNode, currentIndex)) return true;
      currentNode = currentNode.next;
      currentIndex++;
    }
    return false;
}
```

---

## Working with Linked List index

#### Building the `indexOf(element)` method:

This method returns the first index of the element in the Linked List. Returns -1 If the Linked List is fully traversed and the element not found.

We will use the reference to the `size` property and `head` node to set constraints and track the Linked List traversal.

```
LinkedList.prototype.indexOf = function (element) {
    let currentNode = this.head;
    let currentIndex = -1;
    while(currentNode !== null) {
        currentIndex++;
        if(currentNode.val === element) return currentIndex;
        currentNode = currentNode.next;
    }
    return -1;
}
```

#### Building the `nodeAt(index)` method:

This method returns the node at the given index. If the element is not found, returns `null`.
We will use the reference to the `size` property and `head` node to set constraints and track the Linked List traversal.

```
LinkedList.prototype.nodeAt = function (index) {
    if(index < 0) {
        index = this.size + index;
        if(index < 0) return null;
    }
    if(index >= this.size || this.head === null) return null;

    let currentIndex = 0;
    let currentNode = this.head;

    while(currentIndex < index) {
        currentNode = currentNode.next;
        currentIndex++;
    }
    return currentNode;
}
```

#### Building the `elementAt(index)` method:

This method returns the element at the given index. If the element is not found, returns `null`.
We will use the reference to the `size` property and `head` node to set constraints and track the Linked List traversal. Very similar to the `nodeAt(element)` method, but returns the value of the node directly.

```
LinkedList.prototype.elementAt = function (index) {
    if(index < 0) {
        index = this.size + index;
        if(index < 0) return null;
    }
    if(index >= this.size || this.head === null) return null;

    let currentIndex = 0;
    let currentNode = this.head;

    while(currentIndex < index) {
        currentNode = currentNode.next;
        currentIndex++;
    }
    return currentNode.val;
}
```

#### Building the `lastIndexOf(element)` method.

This method returns the index of the last occurence of the element. Returns -1 If the Linked List is fully traversed and the element not found.

In a Circular Linked List, nodes have a `previous` property, the `head` node is connected to the last node with the `previous` property. Then, `lastIndexOf(element)` works in the fastest time possible by traversing the Linked List from the end of the Linked List. We cannot do this in Non-Circular Linked Lists because to get to the last element, we have to traverse the entire array until we find the last node. In a Circular Linked List, we can simply, `this.head.previous` to point to the last node in `O(1)` time.

However, in case of a Non-Circular Linked List, the only way to do this is by traversing the Linked List, one node at a time until the last node is reached and then returning the most recent index where the element was found. The time complexity is `O(n)` and the entire list must be traversed unlike the `indexOf` method where, the traversal stops when the first element is found.

```
LinkedList.prototype.lastIndexOf = function (element) {
    let currentNode = this.head;
    let currentIndex = -1;
    let lastIndex = -1;
    while(currentNode !== null) {
        currentIndex++;
        if(currentNode.val === element) lastIndex = currentIndex;
        currentNode = currentNode.next;
    }
    return lastIndex;
}
```

---

## Utility methods

#### The `isEmpty()` method.

This method returns a Boolean value whether the Linked List is empty or not. A Linked List is empty when the `size` property is 0.

```
LinkedList.prototype.isEmpty = function () {
    return this.size === 0;
}
```

#### The `clear()` method.

This method resets the Linked List by removing all nodes.

```
LinkedList.prototype.clear = function () {
    this.head = null;
    this.size = 0;
}
```

#### Building the `hasCycle()` method.

A Linked List has a Cycle when there is some node in the list that can be reached again by continuously following the next pointer. Returns a Boolean.

```
LinkedList.prototype.hasCycle = function () {
    let pointerA = this.head;
    let pointerB = this.head;
    while(pointerA !== null && pointerB !== null && pointerB.next !== null) {
        pointerA = pointerA.next;
        pointerB = pointerB.next.next;
        if(pointerA === pointerB) return true;
    }
    return false;
}
```

---

## `LinkedList.fromArray(array)` - Create a new Linked List from an Array

The `LinkedList.fromArray(array)` is a static method of the LinkedList class, that will allow us to create a new Linked List from an array. This is similar to how `Object.fromEntries` allows an Object to create properties and values from a two-dimensional array, containing arrays having two elements each (key and value), referred to as `entries`.

For this implementation, we will use the `LinkedList` class to create a new Linked List. We will also use the earlier created `add` method to add the array elements to the Linked List without any hassles.


```
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    add(...elements) {
        // .....
    }

    // ....other methods

    static fromArray(array) {
        const newList = new LinkedList();
        for(let i = 0; i < array.length; i++) {
            newList.add(array[i]);
        }
        return newList;
    }
}
```

---

# References

- **@datastructures-js/linkedlist | [Github](https://github.com/datastructures-js/linked-list/blob/master/LinkedList.md)**