/**
 * 328 - Odd Even List (https://leetcode.com/problems/odd-even-linked-list/)
 * -------------------------------------------------------------------------
 */

import { LinkedList, ListNode } from '../../../data-structures/index.js';

var oddEvenList = function (head) {
  if (head.next === null) return head;
  let currentNode = head;
  let previousNode = new ListNode();
  let evenNode = head;
  let index = -1;
  while (currentNode !== null) {
    index++;
    currentNode = currentNode.next;
  }
  currentNode = head.next;
  index = Math.floor((index - 1) / 2);

  while (index > 0) {
    const currentVal = currentNode.val;
    currentNode.val = currentNode.next.val;
    currentNode.next.val = currentVal;
    previousNode = currentNode;
    currentNode = currentNode.next;
    index--;
  }
  return head;
};

var oddEvenList = function (head) {
  if (head.next === null) return head;

  const currentVal = head.val;
  head.val = head.next.val;
  head.next.val = currentVal;
  let currentNode = head.next;

  head.next = oddEvenList(currentNode);

  return head;
};

/** Testing */
const listA = LinkedList.fromArray([1, 2, 3, 4, 5]);
console.log(JSON.stringify(oddEvenList(listA.head)));
