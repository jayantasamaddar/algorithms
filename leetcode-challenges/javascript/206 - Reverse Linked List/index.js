/**
 * Reverse Linked List (https://leetcode.com/problems/reverse-linked-list/submissions/)
 * ------------------------------------------------------------------------------------
 */

/**
 * Method 1 - Iterative Method
 * ---------------------------
 * [Runtime: 143 ms, faster than 5.08% of JavaScript online submissions for Reverse Linked List.]
 * [Memory Usage: 43.7 MB, less than 93.20% of JavaScript online submissions for Reverse Linked List.]
 */

var reverseList = function (head) {
  let currentNode = head;
  let previousNode = null;

  while (currentNode !== null) {
    const next = currentNode.next;
    currentNode.next = previousNode;
    previousNode = currentNode;
    currentNode = next;
  }
  return previousNode;
};

/**
 * Method 2 - Recursive Method
 * ---------------------------
 * [Runtime: 66 ms, faster than 94.74% of JavaScript online submissions for Reverse Linked List.]
 * [Memory Usage: 44.8 MB, less than 6.43% of JavaScript online submissions for Reverse Linked List.]
 */

var reverseList = function (head, previousNode = null) {
  if (head === null) return previousNode;
  const next = head.next;
  head.next = previousNode;
  return reverseList(next, head);
};
