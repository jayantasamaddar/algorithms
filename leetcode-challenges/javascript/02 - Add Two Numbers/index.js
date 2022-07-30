import { LinkedList, ListNode } from '../../../data-structures/index.js';
/**
 * 02 - Add Two Numbers
 * ---------------------
 * You are given two non-empty linked lists representing two non-negative integers.
 * The digits are stored in reverse order, and each of their nodes contains a single digit.
 *
 * Add the two numbers and return the sum as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 *
 * Example 1
 * ---------
 * Input: l1 = [2,4,3], l2 = [5,6,4]
 * Output: [7,0,8]
 * Explanation: 342 + 465 = 807.
 *
 * Example 2
 * ---------
 * Input: l1 = [0], l2 = [0]
 * Output: [0]
 *
 * Example 3
 * ---------
 * Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
 * Output: [8,9,9,9,0,0,0,1]
 */

/**
 * Method 1 - To accomodate larger numbers, i.e. > 1e+21, create a findSum(first, second) function,
 * that takes two large numbers and returns the string value of the sum. Requires Array.reverse()
 * ----------------------------------------------------------------------------------------------
 * [Runtime: 178 ms, faster than 32.24% of JavaScript online submissions for Add Two Numbers.]
 * [Memory Usage: 47.7 MB, less than 27.19% of JavaScript online submissions for Add Two Numbers.]
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @returns {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let l1Pointer = l1;
  let l2Pointer = l2;
  let l1Reversal = '';
  let l2Reversal = '';

  while (l1Pointer !== null || l2Pointer !== null) {
    if (l1Pointer !== null) {
      l1Reversal = l1Pointer.val + l1Reversal;
      l1Pointer = l1Pointer.next;
    }
    if (l2Pointer !== null) {
      l2Reversal = l2Pointer.val + l2Reversal;
      l2Pointer = l2Pointer.next;
    }
  }

  let sum = '';

  if (l1Reversal.length > 21 || l2Reversal.length > 21) {
    const findSum = (first, second) => {
      let carry = 0;
      let sum = '';
      const difference = second.length - first.length;
      for (let i = first.length - 1; i >= 0; i--) {
        let temp =
          Number(first.charAt(i)) +
          Number(second.charAt(i + difference)) +
          carry;
        if (temp >= 10) {
          sum = (temp % 10) + sum;
          carry = Math.floor(temp / 10);
        } else {
          sum = temp + sum;
          carry = 0;
        }
      }
      if (carry) {
        sum = carry + sum;
      }
      return sum;
    };

    sum =
      l1Reversal.length >= l2Reversal.length
        ? findSum(l1Reversal, l2Reversal)
        : findSum(l2Reversal, l1Reversal);
  } else {
    sum = (parseInt(l1Reversal) + parseInt(l2Reversal)).toString();
  }

  const nums = sum.split('').reverse();

  const node = new ListNode(parseInt(nums[0]));
  let currentNode = node;
  let i = 1;
  while (i < nums.length) {
    const newNode = new ListNode(parseInt(nums[i]));
    currentNode.next = newNode;
    currentNode = currentNode.next;
    i++;
  }
  return node;
};

/**
 * Method 2 - To accomodate larger numbers, i.e. > 1e+21, create a findSum(first, second) function,
 * that takes two large numbers and returns the string value of the sum.
 * ------------------------------------------------------------------------------------------------
 * [Runtime: 117 ms, faster than 84.67% of JavaScript online submissions for Add Two Numbers.]
 * [Memory Usage: 47.5 MB, less than 39.27% of JavaScript online submissions for Add Two Numbers.]
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @returns {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let l1Pointer = l1;
  let l2Pointer = l2;
  let l1Reversal = '';
  let l2Reversal = '';

  while (l1Pointer !== null || l2Pointer !== null) {
    if (l1Pointer !== null) {
      l1Reversal = l1Pointer.val + l1Reversal;
      l1Pointer = l1Pointer.next;
    }
    if (l2Pointer !== null) {
      l2Reversal = l2Pointer.val + l2Reversal;
      l2Pointer = l2Pointer.next;
    }
  }

  let sum = '';

  if (l1Reversal.length > 21 || l2Reversal.length > 21) {
    const findSum = (first, second) => {
      let carry = 0;
      let sum = '';
      const difference = second.length - first.length;
      for (let i = first.length - 1; i >= 0; i--) {
        let temp =
          Number(first.charAt(i)) +
          Number(second.charAt(i + difference)) +
          carry;
        if (temp >= 10) {
          sum = (temp % 10) + sum;
          carry = Math.floor(temp / 10);
        } else {
          sum = temp + sum;
          carry = 0;
        }
      }
      if (carry) {
        sum = carry + sum;
      }
      return sum;
    };

    sum =
      l1Reversal.length >= l2Reversal.length
        ? findSum(l1Reversal, l2Reversal)
        : findSum(l2Reversal, l1Reversal);
  } else {
    sum = (parseInt(l1Reversal) + parseInt(l2Reversal)).toString();
  }

  const nums = sum.split('');

  let currentNode = new ListNode(parseInt(nums[0]));
  let i = 1;
  while (i < nums.length) {
    const newNode = new ListNode(parseInt(nums[i]));
    newNode.next = currentNode;
    currentNode = newNode;
    i++;
  }
  return currentNode;
};

/** Testing */
const l1 = LinkedList.fromArray([2, 4, 3]);
const l2 = LinkedList.fromArray([5, 6, 4]);
console.log(addTwoNumbers(l1.head, l2.head)); // ListNode { val: 7, next: ListNode { val: 0, next: ListNode { val: 8, next: null } } }

const l3 = LinkedList.fromArray([
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 1,
]);
const l4 = LinkedList.fromArray([5, 6, 4]);
console.log(addTwoNumbers(l3.head, l4.head));
