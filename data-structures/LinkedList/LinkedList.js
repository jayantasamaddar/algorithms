export class ListNode {
  constructor(val = null, next = null) {
    this.val = val;
    this.next = next;
  }
}

export class LinkedList {
  constructor() {
    this.size = 0;
    this.head = null;
  }

  /** Add an element to the Linked List */
  add(...elements) {
    for (const element of elements) {
      const node = new ListNode(element);
      let currentNode = this.head;

      if (currentNode === null) {
        this.head = node;
      } else {
        while (currentNode.next !== null) {
          currentNode = currentNode.next;
        }
        currentNode.next = node;
      }
      this.size++;
    }
  }

  /** Add a new element at the start of the Linked List */
  addFirst(element) {
    if (element === null) return;
    const node = new ListNode(element);
    if (this.head === null) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  /** insertAt a certain Index */
  insertAt(index, element) {
    if (index < 0 || index > this.size) return;

    const node = new ListNode(element);
    let currentNode = this.head;

    if (index === 0) {
      node.next = currentNode;
      this.head = node;
    } else {
      let previousNode = null;
      let currentIndex = 0;

      while (currentNode !== null && currentIndex < index) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        currentIndex++;
      }
      if (currentNode === null) return;
      node.next = currentNode;
      previousNode.next = node;
    }
    this.size++;
  }

  /** Remove an element from the Linked List */
  remove(element) {
    if (this.head === null) return null;
    else {
      let currentNode = this.head;
      let previousNode = null;

      if (currentNode.val === element) {
        this.head = currentNode.next;
      } else {
        while (currentNode !== null && currentNode.val !== element) {
          previousNode = currentNode;
          currentNode = currentNode.next;
        }
        if (currentNode === null) return;
        previousNode.next = currentNode.next;
      }
      this.size--;
    }
  }

  /** Remove the first Element */
  removeFirst() {
    if (this.head === null) return;
    const head = this.head;
    this.head = this.head.next;
    this.size--;
    return head.val;
  }

  /** Remove the last Element */
  removeLast() {
    if (this.head === null) return;
    let currentNode = this.head;
    let previousNode = null;

    while (currentNode.next !== null) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    if (previousNode === null) {
      this.head = previousNode;
    } else {
      previousNode.next = null;
    }
    this.size--;
    return currentNode.val;
  }

  /** removeAt a certain Index */
  removeAt(index) {
    if (index >= this.size || index < 0 || this.head === null) return;

    let currentNode = this.head;
    let previousNode = null;
    let currentIndex = 0;

    if (index === 0) {
      this.head = currentNode.next;
    } else {
      while (currentNode !== null && currentIndex < index) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        currentIndex++;
      }
      if (currentNode === null) return;
      previousNode.next = currentNode.next;
    }
    this.size--;
    return currentNode.val;
  }

  /** Clears the Linked List */
  clear() {
    this.head = null;
    this.size = 0;
  }

  /** Returns a boolean whether Linked List is empty */
  isEmpty() {
    return this.size === 0;
  }

  /**
   * Checks whether the Linked List has a cycle
   *
   * There is a cycle in a linked list if there is some node in the list that can be reached again
   * by continuously following the next pointer.
   *
   * @returns {boolean} - Boolean
   */
  hasCycle() {
    let pointerA = this.head;
    let pointerB = this.head;
    while (pointerA !== null && pointerB !== null && pointerB.next !== null) {
      pointerA = pointerA.next;
      pointerB = pointerB.next.next;
      if (pointerA === pointerB) return true;
    }
    return false;
  }

  /** Converts linked list to an array */
  toArray() {
    const container = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      container.push(currentNode.val);
      currentNode = currentNode.next;
    }
    return container;
  }

  /** Traverse the Linked List from beginning to end */
  forEach(callbackFn) {
    if (typeof callbackFn !== 'function') {
      throw new Error(
        'LinkedList.forEach(callbackFn), expects a callback function'
      );
    }

    let currentNode = this.head;
    let currentIndex = 0;

    while (currentNode !== null) {
      callbackFn(currentNode, currentIndex);
      currentIndex++;
      currentNode = currentNode.next;
    }
  }

  /**
   * Filter a Linked List
   *
   * @param {function} callbackFn - Should return true for required nodes
   * @returns {LinkedList} - Returns a new Linked List
   */
  filter(callbackFn) {
    if (typeof callbackFn !== 'function') {
      throw new Error(
        'LinkedList.filter(callbackFn), expects a callback function'
      );
    }
    const result = new LinkedList();
    this.forEach((node, index) => {
      if (!callbackFn(node, index)) return;
      result.add(node.val);
    });
    return result;
  }

  /** Reverse a Linked List */
  reverse() {
    let currentNode = this.head;
    let previousNode = null;
    while (currentNode !== null) {
      const next = currentNode.next;
      currentNode.next = previousNode;
      previousNode = currentNode;
      currentNode = next;
    }
    this.head = previousNode;
    return this.head;
  }

  /**
   * Concatenate Multiple Linked Lists
   *
   * @param  {...LinkedList} linkedLists - takes LinkedList(s) as arguments
   * @returns {ListNode} - returns the head ListNode of the LinkedList
   */
  concat(...linkedLists) {
    let currentNode = this.head;

    for (const list of linkedLists) {
      if (!list instanceof LinkedList) {
        throw new Error('Expected LinkedList as function argument');
      }
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = list.head;
      currentNode = currentNode.next;
    }
    return this.head;
  }

  /** Find Index if callback function returns true. If none true, return -1 */
  findIndex(callbackFn) {
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

  /** Find if element exists in Linked List. Returns boolean. */
  find(callbackFn) {
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

  /** Returns the first Index of the element */
  indexOf(element) {
    let currentNode = this.head;
    let currentIndex = -1;

    while (currentNode !== null) {
      currentIndex++;
      if (currentNode.val === element) return currentIndex;
      currentNode = currentNode.next;
    }
    return -1;
  }

  /** Returns the last Index of the element */
  lastIndexOf(element) {
    let currentNode = this.head;
    let currentIndex = -1;
    let lastIndex = -1;
    while (currentNode !== null) {
      currentIndex++;
      if (currentNode.val === element) lastIndex = currentIndex;
      currentNode = currentNode.next;
    }
    return lastIndex;
  }

  /** Returns the Node at the given Index
   *
   * Negative Indexes count from the end of the array. E.g. -1 is the last node.
   */
  nodeAt(index) {
    if (index < 0) {
      index = this.size + index;
      if (index < 0) return null;
    }
    if (index >= this.size || this.head === null) return null;

    let currentIndex = 0;
    let currentNode = this.head;
    while (currentIndex < index) {
      currentNode = currentNode.next;
      currentIndex++;
    }
    return currentNode;
  }

  /** Returns the Element at the given Index
   *
   * Negative Indexes count from the end of the array. E.g. -1 is the last element.
   */
  elementAt(index) {
    index = index < 0 ? this.size + index : index;
    let currentNode = this.head;
    let currentIndex = -1;

    while (currentNode !== null) {
      currentIndex++;
      if (currentIndex === index) return currentNode.val;
      currentNode = currentNode.next;
    }
    return null;
  }

  /** Create a Linked List from an Array */
  static fromArray(array) {
    if (!Array.isArray(array)) {
      throw new Error(`Cannot create Linked List from non-array structures.
      Try converting Array-like structures to an array before passing as args, with Array.from()`);
    }
    const linkedList = new LinkedList();
    array.forEach(element => linkedList.add(element));
    return linkedList;
  }
}
