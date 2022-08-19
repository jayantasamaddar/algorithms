/**
 * 328 - Odd Even List (https://leetcode.com/problems/odd-even-linked-list/)
 * -------------------------------------------------------------------------
 * Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.
 * The first node is considered odd, and the second node is even, and so on.
 * Note that the relative order inside both the even and odd groups should remain as it was in the input.
 * You must solve the problem in O(1) extra space complexity and O(n) time complexity.
 */

import { LinkedList, ListNode } from '../../../data-structures/index.js';

/**
 * Method 1 - Using a Queue to store even Values and appending to the end.
 * -----------------------------------------------------------------------
 * [Runtime: 105 ms, faster than 53.26% of JavaScript online submissions for Odd Even Linked List.]
 * [Memory Usage: 44.9 MB, less than 23.10% of JavaScript online submissions for Odd Even Linked List.]
 * @param {ListNode} head
 * @returns {ListNode}
 */
var oddEvenList = function (head) {
  if (head === null) return null;
  let currentNode = head;
  let previousNode = null;
  let evenQ = [];
  let index = 0;
  while (currentNode !== null) {
    index++;
    if (index % 2 === 0) {
      evenQ.push(currentNode.val);
      previousNode.next = currentNode.next;
      currentNode =
        previousNode.next === null ? previousNode : previousNode.next;
    } else if (currentNode.next === null) {
      while (evenQ.length > 0) {
        currentNode.next = new ListNode(evenQ.shift());
        currentNode = currentNode.next;
      }
      return head;
    } else {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
  }
};

/** Testing */
const listA = LinkedList.fromArray([1, 2, 3, 4, 5]);
const listB = LinkedList.fromArray([1, 2, 3, 4, 5, 6, 7, 8]);
const listC = LinkedList.fromArray([1]);
console.log(JSON.stringify(oddEvenList(listA.head)));
console.log(JSON.stringify(oddEvenList(listB.head)));
console.log(JSON.stringify(oddEvenList(listC.head)));
console.log(JSON.stringify(oddEvenList(null)));
