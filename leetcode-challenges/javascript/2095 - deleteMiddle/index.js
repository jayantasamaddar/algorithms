/**
 * 2095 - Delete the Middle Node of a Linked List (https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/)
 * -----------------------------------------------
 * ou are given the head of a linked list.
 * Delete the middle node, and return the head of the modified linked list.
 *
 * The middle node of a linked list of size n is the ⌊n / 2⌋th node from the start using 0-based indexing, where ⌊x⌋ denotes the largest integer less than or equal to x.
 *
 * For n = 1, 2, 3, 4, and 5, the middle nodes are 0, 1, 1, 2, and 2, respectively.
 *
 * Example 1
 * ---------
 * Input: head = [1,3,4,7,1,2,6]
 * Output: [1,3,4,1,2,6]
 * Explanation:
 * The above figure represents the given linked list. The indices of the nodes are written below.
 * Since n = 7, node 3 with value 7 is the middle node, which is marked in red.
 * We return the new list after removing this node.
 *
 * Example 2
 * ---------
 * Input: head = [1,2,3,4]
 * Output: [1,2,4]
 * Explanation:
 * The above figure represents the given linked list.
 * For n = 4, node 2 with value 3 is the middle node, which is marked in red.
 *
 * Example 3
 * ---------
 * Input: head = [2,1]
 * Output: [2]
 * Explanation:
 * The above figure represents the given linked list.
 * For n = 2, node 1 with value 1 is the middle node, which is marked in red.
 * Node 0 with value 2 is the only node remaining after removing node 1.
 *
 * Constraints
 * -----------
 * The number of nodes in the list is in the range [1, 10^5].
 * 1 <= Node.val <= 10^5
 */

import { LinkedList } from '../../../data-structures/index.js';
/**
 * Method - Two Pointers
 * ---------------------
 * [Runtime: 974 ms, faster than 51.04% of JavaScript online submissions for Delete the Middle Node of a Linked List]
 * [Memory Usage: 127.3 MB, less than 36.67% of JavaScript online submissions for Delete the Middle Node of a Linked List.]
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function (head) {
  if (head.next === null) return null;
  let index = 0;
  let currentNode = head;
  while (currentNode !== null) {
    currentNode = currentNode.next;
    index++;
  }
  index = index % 2 === 1 ? Math.floor(index / 2) : index / 2;
  currentNode = head;
  let previousNode = head;
  while (index > 0) {
    previousNode = currentNode;
    currentNode = currentNode.next;
    index--;
  }
  previousNode.next = currentNode.next;
  return head;
};

/** Testing */
const listA = LinkedList.fromArray([1, 3, 4, 7, 1, 2, 6]);
const listB = LinkedList.fromArray([1, 2, 3, 4]);
const listC = LinkedList.fromArray([2, 1]);
const listD = LinkedList.fromArray([1]);

console.log(JSON.stringify(deleteMiddle(listA.head))); // {"val":1,"next":{"val":3,"next":{"val":4,"next":{"val":1,"next":{"val":2,"next":{"val":6,"next":null}}}}}}
console.log(deleteMiddle(listB.head)); // ListNode { val: 1, next: ListNode { val: 2, next: ListNode { val: 4, next: null } } }
console.log(deleteMiddle(listC.head)); // ListNode { val: 2, next: ListNode { val: 1, next: null } }
console.log(deleteMiddle(listD.head)); // null
