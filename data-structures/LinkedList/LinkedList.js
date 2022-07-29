class ListNode {
  constructor(val = null, next = null) {
    this.val = val;
    this.next = next;
  }
}

class LinkedList {
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
    index = index < 0 ? list.size + index : index;
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

/***************************************************************************************/
/** Testing the Linked List Data Structure */
/***************************************************************************************/

const list = new LinkedList();
console.log(list.isEmpty()); // true
list.add('Apple');
list.add('Bat');
list.add('Cat');
console.log(list.toArray()); // [ 'Apple', 'Bat', 'Cat' ]
list.clear();
console.log(list.toArray()); // []

list.add(1, 1, 2, 3, 5, 13, 21);
console.log(list.toArray()); // [ 1, 1, 2, 3, 5, 13, 21 ]

list.insertAt(5, 8); // Insert at index 5, element: 8
console.log(list.toArray()); // [ 1, 1, 2, 3, 5, 8, 13, 21 ]
console.log(list.size); // 8

list.remove(13);
list.remove(5);
console.log(JSON.stringify(list.head));
console.log(list.toArray()); // [ 1, 1, 2, 3, 8, 21 ]
console.log(list.size); // 6

list.insertAt(4, 5); // Insert at index 4, element: 5
console.log(list.toArray()); // [ 1, 1, 2, 3, 5, 8, 21 ]
console.log(list.elementAt(4)); // 5
console.log(list.elementAt(100)); // null
console.log(list.elementAt(-1)); // 21
console.log(list.nodeAt(4)); // Node { val: 5, next: Node { val: 8, next: Node { val: 21, next: null } } }
console.log(list.nodeAt(100)); // null
console.log(list.nodeAt(-1)); // Node { val: 21, next: null }

console.log(list.removeAt(4)); // Result: 5, removed at Index 4
console.log(list.toArray()); // [ 1, 1, 2, 3, 8, 21 ]
console.log(list.isEmpty()); // false
console.log(list.hasCycle()); // false

/** indexOf and lastIndexOf */
console.log(list.indexOf(8)); // 4
console.log(list.indexOf(34)); // -1 (doesn't exist)
console.log(list.indexOf(1)); // 0
console.log(list.toArray()); // [ 1, 1, 2, 3, 8, 21 ]
console.log(list.lastIndexOf(1)); // 1
list.removeAt(0);
console.log(list.lastIndexOf(1)); // 0
list.removeFirst();
console.log(list.lastIndexOf(1)); // -1
console.log(list.toArray()); // [ 2, 3, 8, 21 ]

/** Insertions */
list.addFirst(1);
list.addFirst(1);
console.log(list.toArray()); // [ 1, 1, 2, 3, 8, 21 ]
list.insertAt(list.size - 1, 13);
list.add(34);
console.log(list.size); // 8
console.log(list.toArray()); // [ 1, 1, 2, 3, 8, 13, 21, 34 ]

/** Removals */
console.log(list.removeFirst()); // 1
console.log(list.toArray()); // [ 1, 2, 3, 8, 13, 21, 34 ]
console.log(list.removeLast()); // 34
console.log(list.toArray()); // [ 1, 2, 3, 8, 13, 21 ]
list.remove(8);
console.log(list.toArray()); // [ 1, 2, 3, 13, 21 ]
console.log(list.head);
console.log(JSON.stringify(list.reverse())); // {"size":5,"head":{"val":21,"next":{"val":13,"next":{"val":3,"next":{"val":2,"next":{"val":1,"next":null}}}}}}
console.log(list.toArray()); // [ 21, 13, 3, 2, 1 ]

/** Linked List Traversal - LinkedList.prototype.forEach((node, index)) */
const arr = [];
list.forEach((node, index) => arr.push(node.val));
console.log(arr); // [ 21, 13, 3, 2, 1 ]

/** LinkedList.fromArray(array) */
const linkedListFromArray = LinkedList.fromArray([
  'Salah',
  'Mane',
  'Firmino',
  'Jota',
  'Diaz',
]);
console.log(linkedListFromArray instanceof LinkedList);
console.log(JSON.stringify(linkedListFromArray));
// {"size":5,"head":{"val":"Salah","next":{"val":"Mane","next":{"val":"Firmino","next":{"val":"Jota","next":{"val":"Diaz","next":null}}}}}}

/** Linked List Concatenation */
const tens = LinkedList.fromArray([10, 20, 30, 40]);
const hundreds = LinkedList.fromArray([100, 200, 300, 400]);
const thousands = LinkedList.fromArray([1000, 2000, 3000, 4000]);

tens.concat(hundreds, thousands);
console.log(tens.toArray()); // [ 10, 20, 30, 40, 100, 200, 300, 400, 1000, 2000, 3000, 4000 ]

/** Filtering a Linked List */
console.log(tens.filter(node => node.val <= 400 || node.val >= 3000).toArray()); // [ 10, 20, 30, 40, 100, 200, 300, 400, 3000, 4000 ]

/***************************************************************************************/
/** Linked List Algorithms */
/***************************************************************************************/

/** Sum of a Linked List - O(n) - Iterative Method */
const sum = head => {
  let num = 0;
  while (head !== null) {
    num += head.val;
    head = head.next;
  }
  return num;
};

/** Sum of a Linked List - O(n) - Recursive Method */
const sum2 = (head, sum = 0) => {
  if (head === null) return sum;
  sum += head.val;
  return sum2(head.next, sum);
};

console.log(sum(list.head)); // 40
console.log(sum2(list.head)); // 40

/***************************************************************************************/

/** Reverse a Linked List - Iterative Method - O(n) */
const reverseList = head => {
  let currentNode = head;
  let previousNode = null;

  while (currentNode !== null) {
    const next = currentNode.next;
    currentNode.next = previousNode;
    previousNode = currentNode;
    currentNode = next;
  }
  list.head = previousNode;
  return list.head;
};

console.log(JSON.stringify(reverseList(list.head))); // {"val":1,"next":{"val":2,"next":{"val":3,"next":{"val":13,"next":{"val":21,"next":null}}}}}

/** Reverse a Linked List - Recursive Method - O(n) */
const reverseList2 = (head, previousNode = null) => {
  if (head === null) {
    list.head = previousNode;
    return list.head;
  }
  const next = head.next;
  head.next = previousNode;
  return reverseList2(next, head);
};

console.log(JSON.stringify(reverseList2(list.head))); // {"val":21,"next":{"val":13,"next":{"val":3,"next":{"val":2,"next":{"val":1,"next":null}}}}}

/***************************************************************************************/

/**
 * Zipper Lists - Iterative Method - O(min(n,m)), where n and m are the length of the lists
 * ----------------------------------------------------------------------------------------
 * Two Linked Lists of same or variable length are given.
 * Alternate the linked list elements to form a new linked list.
 * If a linked list has elements remaining, concatenate them in the end.
 */

const zipperList = function (list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;

  let head = list1;
  let i = list1.next; // current node of list1
  let j = list2; // current node of list2
  let count = 0;

  while (i !== null && j !== null) {
    if (count % 2 === 0) {
      head.next = j;
      j = j.next;
    } else {
      head.next = i;
      i = i.next;
    }
    head = head.next;
    count++;
  }
  head.next = j === null ? i : j;
  return list1;
};

/** Test Zipper List */
const linkedList2 = new LinkedList();
linkedList2.add(10);
linkedList2.add(20);
linkedList2.add(30);

const quickDeepCopyList1 = JSON.parse(JSON.stringify(list.head));
const quickDeepCopyList2 = JSON.parse(JSON.stringify(linkedList2.head));

console.log(JSON.stringify(zipperList(quickDeepCopyList1, quickDeepCopyList2)));
// {"val":21,"next":{"val":10,"next":{"val":13,"next":{"val":20,"next":{"val":3,"next":{"val":30,"next":{"val":2,"next":{"val":1,"next":null}}}}}}}}

console.log(list.toArray()); // [21, 13, 3, 2, 1];
console.log(linkedList2.toArray()); // [10, 20, 30];

/**
 * Zipper Lists - Method 2 - Recursive Method - O(min(n,m)), where n and m are the length of the lists
 * ---------------------------------------------------------------------------------------------------
 * Two Linked Lists of same or variable length are given.
 * Alternate the linked list elements to form a new linked list.
 * If a linked list has elements remaining, concatenate them in the end.
 */

const zipperList2 = function (list1, list2) {
  if (list1 === null && list2 === null) return null;
  if (list1 === null || list2 === null) return list1 === null ? list2 : list1;

  const next1 = list1.next;
  const next2 = list2.next;
  list1.next = list2;
  list2.next = zipperList2(next1, next2);

  return list1;
};

/** Test Zipper List 2 */
const quickDeepCopyList3 = JSON.parse(JSON.stringify(list.head));
const quickDeepCopyList4 = JSON.parse(JSON.stringify(linkedList2.head));

console.log(
  JSON.stringify(zipperList2(quickDeepCopyList3, quickDeepCopyList4))
);

// {"val":21,"next":{"val":10,"next":{"val":13,"next":{"val":20,"next":{"val":3,"next":{"val":30,"next":{"val":2,"next":{"val":1,"next":null}}}}}}}}

/***************************************************************************************/

/**
 * Intersection of Two Linked Lists - I
 * ------------------------------------
 * The intersection can happen at any point.
 */

var getIntersectionNode = function (headA, headB) {
  let currentNodeA = headA;
  let currentNodeB = headB;

  while (currentNodeA !== null) {
    while (currentNodeB !== null) {
      if (
        currentNodeA.val === currentNodeB.val &&
        currentNodeA.next?.val === currentNodeB.next?.val
      ) {
        return currentNodeA;
      }
      currentNodeB = currentNodeB.next;
    }
    currentNodeA = currentNodeA.next;
    currentNodeB = headB;
  }
  return currentNodeA;
};

/**
 * Intersection of Two Linked Lists - II
 * -------------------------------------
 * [Runtime: 88 ms, faster than 97.45% of JavaScript online submissions for Intersection of Two Linked Lists.]
 * [Memory Usage: 49.4 MB, less than 89.31% of JavaScript online submissions for Intersection of Two Linked Lists.]
 */

var getIntersectionNode = function (headA, headB) {
  if (headA === null || headB === null) return null;
  let currentNodeA = headA;
  let currentNodeB = headB;

  while (currentNodeA !== currentNodeB) {
    if (currentNodeA === null) {
      currentNodeA = headB;
    } else {
      currentNodeA = currentNodeA.next;
    }

    if (currentNodeB === null) {
      currentNodeB = headA;
    } else {
      currentNodeB = currentNodeB.next;
    }
  }
  return currentNodeA;
};

/** Testing */
const tensAndHundreds = tens.filter(node => node.val < 1000).head;
console.log(getIntersectionNode(tensAndHundreds, hundreds.head));

const headA = LinkedList.fromArray([4, 1, 8, 4, 5]).head;
const headB = LinkedList.fromArray([5, 6, 1, 8, 4, 5]).head;

console.log(getIntersectionNode(headA, headB));

const headC = LinkedList.fromArray([1, 9, 1, 2, 4]).head;
const headD = LinkedList.fromArray([3, 2, 4]).head;

console.log(getIntersectionNode(headC, headD));

/***************************************************************************************/

const cycleList = new LinkedList();

cycleList.add(10);
cycleList.add(20);
cycleList.add(30);

const refNode = cycleList.nodeAt(1);
console.log(refNode);
let c = cycleList.head;
while (c.next !== null) {
  c = c.next;
}
c.next = refNode;

console.log(cycleList.hasCycle());
