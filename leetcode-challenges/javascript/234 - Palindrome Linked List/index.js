/**
 * 234 - Palindrome Linked List (https://leetcode.com/problems/palindrome-linked-list/)
 * -------------------------------------------------------------------------------------
 * Given the head of a singly linked list, return true if it is a palindrome.
 *
 * Example 1
 * ---------
 * Input: head = [1,2,2,1]
 * Output: true
 *
 * Example 2
 * ---------
 * Input: head = [1,2]
 * Output: false
 */

import { LinkedList, ListNode } from '../../../data-structures/index.js';

/**
 * Method 1 - Create a Reverse List and iterate through both the lists and compare values.
 * [Runtime: 225 ms, faster than 48.69% of JavaScript online submissions for Palindrome Linked List.]
 * [Memory Usage: 80 MB, less than 35.73% of JavaScript online submissions for Palindrome Linked List.]
 * @param {ListNode} head
 * @returns {boolean}
 */
var isPalindrome = function (head) {
  let currentNode = head;
  let previousNode = new ListNode();
  let str = '';
  let i = 0;
  while (currentNode !== null) {
    const next = currentNode.next;
    str += currentNode.val;
    currentNode.next = previousNode;
    previousNode = currentNode;
    currentNode = next;
  }
  while (i < str.length) {
    if (previousNode.val != str[i]) return false;
    previousNode = previousNode.next;
    i++;
  }
  return true;
};

/**
 * Method 2 - Create a string and reverse it.
 * [Runtime: 232 ms, faster than 44.10% of JavaScript online submissions for Palindrome Linked List.]
 * [Memory Usage: 82.6 MB, less than 33.72% of JavaScript online submissions for Palindrome Linked List.]
 * @param {ListNode} head
 * @returns {boolean}
 */
var isPalindrome = function (head) {
  let currentNode = head;
  let str = '';
  let rStr = '';
  while (currentNode !== null) {
    str += currentNode.val;
    currentNode = currentNode.next;
  }
  for (let i = str.length - 1; i >= 0; i--) {
    rStr += str[i];
  }
  return str === rStr;
};

/** Testing */
const listA = LinkedList.fromArray([1, 2, 2, 1]);
const listB = LinkedList.fromArray([1, 2]);

console.log(isPalindrome(listA.head));
console.log(isPalindrome(listB.head));
