/**
 * 203 - Remove Linked List Elements
 * ---------------------------------
 * Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val,
 * and return the new head.
 *
 * Example 1
 * ---------
 * Input: head = [1,2,6,3,4,5,6], val = 6
 * Output: [1,2,3,4,5]
 *
 * Example 2
 * ---------
 * Input: head = [], val = 1
 * Output: []
 *
 * Example 3
 * ---------
 * Input: head = [7,7,7,7], val = 7
 * Output: []
 *
 * Example 4
 * ---------
 * Input: head = [1,2], val = 1
 * Output: [2]
 */

import { LinkedList, ListNode } from '../../../data-structures/index.js';
/**
 * Method - Using a previous and current pointer
 * ---------------------------------------------
 * [Runtime: 92 ms, faster than 82.39% of JavaScript online submissions for Remove Linked List Elements.]
 * [Memory Usage: 46.2 MB, less than 91.72% of JavaScript online submissions for Remove Linked List Elements.]
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  let currentNode = head;
  let previousNode = head;
  while (currentNode !== null) {
    if (currentNode.val === val) {
      const next = currentNode.next;
      previousNode.next = next;
      currentNode = next;
    } else {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
  }
  if (head?.val === val) return head.next;
  return head;
};

/** Testing */
const listA = LinkedList.fromArray([1, 2, 6, 3, 4, 5, 6]);
const listB = LinkedList.fromArray([]);
const listC = LinkedList.fromArray([7, 7, 7, 7]);
const listD = LinkedList.fromArray([1, 2]);

console.log(JSON.stringify(removeElements(listA.head, 6)));
// {"val":1,"next":{"val":2,"next":{"val":3,"next":{"val":4,"next":{"val":5,"next":null}}}}}
console.log(removeElements(listB.head, 1)); // null
console.log(removeElements(listC.head, 7)); // null
console.log(removeElements(listD.head, 1)); // {"val":2,"next":null}
