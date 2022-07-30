/**
 * 876 - Middle of the Linked List (https://leetcode.com/problems/middle-of-the-linked-list/)
 * ------------------------------------------------------------------------------------------
 * Given the head of a singly linked list, return the middle node of the linked list.
 * If there are two middle nodes, return the second middle node.
 *
 * Example 1
 * ---------
 * Input: head = [1,2,3,4,5]
 * Output: [3,4,5]
 * Explanation: The middle node of the list is node 3.
 *
 * Example 2
 * ---------
 * Input: head = [1,2,3,4,5,6]
 * Output: [4,5,6]
 * Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.
 */

/**
 * [Runtime: 93 ms, faster than 40.36% of JavaScript online submissions for Middle of the Linked List.]
 * [Memory Usage: 42.2 MB, less than 28.29% of JavaScript online submissions for Middle of the Linked List.]
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let index = 0;
  let currentNode = head;
  while (currentNode.next !== null) {
    currentNode = currentNode.next;
    index++;
  }
  index = index % 2 === 1 ? Math.ceil(index / 2) : index / 2;
  while (index > 0) {
    head = head.next;
    index--;
  }
  return head;
};
