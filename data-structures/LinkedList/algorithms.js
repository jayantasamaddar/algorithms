import { ListNode, LinkedList } from './LinkedList.js';

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
