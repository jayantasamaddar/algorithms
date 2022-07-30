/**
 * 382 - Linked List Random Node (https://leetcode.com/problems/linked-list-random-node)
 * -------------------------------------------------------------------------------------
 * Given a singly linked list, return a random node's value from the linked list. Each node must have the same probability of being chosen.
 *
 * Implement the Solution class:
 * ----------------------------
 *
 *  Solution(ListNode head) Initializes the object with the head of the singly-linked list head.
 *  int getRandom() Chooses a node randomly from the list and returns its value.
 *  All the nodes of the list should be equally likely to be chosen.
 */

/**
 * Method: Create a this.size method for reference
 * -----------------------------------------------
 * [Runtime: 141 ms, faster than 65.74% of JavaScript online submissions for Linked List Random Node.]
 * [Memory Usage: 49.6 MB, less than 70.37% of JavaScript online submissions for Linked List Random Node.]
 */
/**
 * @param {ListNode} head
 */
import { LinkedList } from '../../../data-structures/index.js';

var Solution = function (head) {
  this.head = head;
  this.size = function () {
    let len = 0;
    let currentNode = this.head;
    while (currentNode !== null) {
      currentNode = currentNode.next;
      len++;
    }
    return len;
  };
};

/**
 * @return {number}
 */
Solution.prototype.getRandom = function () {
  let randomNum = Math.floor(Math.max(0, Math.random() * this.size()));
  let currentNode = this.head;
  let currentIndex = -1;
  while (currentIndex < randomNum) {
    currentIndex++;
    if (currentIndex === randomNum) return currentNode.val;
    currentNode = currentNode.next;
  }
};

/** Testing */
const list = new LinkedList();
list.add(1, 2, 3);

const solution = new Solution(list.head);
console.log(JSON.stringify(solution.head));
console.log(solution.getRandom());
