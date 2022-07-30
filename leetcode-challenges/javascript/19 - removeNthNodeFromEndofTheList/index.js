/**
 * 19 - Remove Nth Node From End of List
 */

import { LinkedList, ListNode } from '../../../data-structures/index.js';

/**
 * Method 1 - Linked List Traversal - Two Pointer - O(n)
 * [Runtime: 61 ms, faster than 97.00% of JavaScript online submissions for Remove Nth Node From End of List.]
 * [Memory Usage: 43.3 MB, less than 29.31% of JavaScript online submissions for Remove Nth Node From End of List.]
 * @param {ListNode} head
 * @param {number} n
 * @returns {ListNode} head
 */
var removeNthFromEnd = function (head, n) {
  if (head === null) return null;

  let currentNode = head;
  let previousNode = head;
  let currentIndex = 0;

  while (currentNode !== null) {
    currentNode = currentNode.next;
    currentIndex++;
  }
  currentNode = head;

  if (n - currentIndex === 0) return head.next;
  else {
    while (n < currentIndex && currentNode !== null) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      n++;
    }
  }
  if (currentNode === null) return null;
  previousNode.next = currentNode.next;
  return head;
};

const test = new LinkedList();
// test.add(1, 2, 3, 4, 5);
test.add(1, 2);
console.log(JSON.stringify(removeNthFromEnd(test.head, 2)));
