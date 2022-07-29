/**
 * 141 - Linked List Cycle (https://leetcode.com/problems/linked-list-cycle/submissions/)
 * --------------------------------------------------------------------------------------
 * Given head, the head of a linked list, determine if the linked list has a cycle in it.
 * There is a cycle in a linked list if there is some node in the list that can be reached again by
 * continuously following the next pointer.
 * Internally, pos is used to denote the index of the node that tail's next pointer is connected to.
 *
 * Note: that pos is not passed as a parameter.
 *
 * Return true if there is a cycle in the linked list. Otherwise, return false.
 */

/**
 * Method 1 - Floyd’s Cycle-Finding Algorithm
 * --------------------------------------------
 * Time Complexity = O(n), Space Complexity = O(1)
 *
 * [Runtime: 115 ms, faster than 39.84% of JavaScript online submissions for Linked List Cycle.]
 *
 * [Memory Usage: 44.8 MB, less than 68.92% of JavaScript online submissions for Linked List Cycle.]
 */

var hasCycle = function (head) {
  let pointerA = head;
  let pointerB = head;
  while (pointerA !== null && pointerB !== null && pointerB.next !== null) {
    pointerA = pointerA.next;
    pointerB = pointerB.next.next;
    if (pointerA === pointerB) return true;
  }
  return false;
};

/**
 * Method 2 - Using Hash Table
 * ---------------------------
 * Time Complexity = O(n), Space Complexity = O(n)
 *
 * [Runtime: 118 ms, faster than 35.40% of JavaScript online submissions for Linked List Cycle.]
 *
 * [Memory Usage: 46.4 MB, less than 6.59% of JavaScript online submissions for Linked List Cycle.]
 */

var hasCycle = function (head) {
  const hashSet = new Set();
  let currentNode = head;
  while (currentNode !== null) {
    if (hashSet.has(currentNode)) return true;
    hashSet.add(currentNode);
    currentNode = currentNode.next;
  }
  return false;
};

/**
 * Method 3 - Using a temporary ListNode
 * -------------------------------------
 * Time Complexity = O(n), Space Complexity = O(1)
 *
 * [Runtime: 96 ms, faster than 67.49% of JavaScript online submissions for Linked List Cycle.]
 *
 * [Memory Usage: 45.4 MB, less than 29.08% of JavaScript online submissions for Linked List Cycle.]
 *
 * Drawbacks: Mutates Linked List but gets the result in the fastest time and takes less space.
 */

var hasCycle = function (head) {
  let tempNode = new ListNode();
  let currentNode = head;
  while (currentNode !== null) {
    if (tempNode === currentNode.next) return true;
    const next = currentNode.next;
    currentNode.next = tempNode;
    currentNode = next;
  }
  return false;
};
