/**
 * 24 - Swap Nodes in Pairs
 * ------------------------
 * Given a linked list, swap every two adjacent nodes and return its head. 
 * You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)
 * 
 * Example 1
 * ---------
 * Input: head = [1,2,3,4]
 * Output: [2,1,4,3]
 * 
 * Example 2
 * ---------
 * Input: head = []
 * Output: []
 * 
 * Example 3
 * ---------
 * Input: head = [1]
 * Output: [1]

 */

import { LinkedList, ListNode } from '../../../data-structures/index.js';

/**
 * Method 1 - Recursive swap
 * -------------------------
 * [Runtime: 121 ms, faster than 7.27% of JavaScript online submissions for Swap Nodes in Pairs.]
 * [Memory Usage: 42.5 MB, less than 14.69% of JavaScript online submissions for Swap Nodes in Pairs.]
 * @param {ListNode} head
 * @returns
 */
var swapPairs = function (head) {
  if (head === null || head.next === null) return head;
  let currentNode = head.next;
  head.next = swapPairs(head.next.next);
  currentNode.next = head;
  return currentNode;
};

/** Testing */
const list = new LinkedList();
list.add(1, 2, 3, 4);
console.log(JSON.stringify(swapPairs(list.head)));
