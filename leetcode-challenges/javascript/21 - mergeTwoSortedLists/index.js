/**
 * 21. Merge Two Sorted Lists (https://leetcode.com/problems/merge-two-sorted-lists/)
 * -----------------------------------------------------------------------------------
 * You are given the heads of two sorted linked lists list1 and list2.
 * Merge the two lists in a one sorted list.
 * The list should be made by splicing together the nodes of the first two lists.
 *
 * Return the head of the merged linked list.
 *
 * - Example 1
 * ---------
 * Input: list1 = [1,2,4], list2 = [1,3,4]
 *
 * Output: [1,1,2,3,4,4]
 *
 * Reference
 * ----------
 * A Linked List is a data structure where elements are stored in a node.
 * The node contains two pieces of information:
 *
 * - The element itself. (val)
 * - The reference to the next node. (next)
 *
 * - Linked List contains a link element called **`head`**.
 * - Each link is linked with its next link using its `next` link.
 * - Last link carries a link as `null` to mark the end of the list.
 */

// [Runtime: 70 ms, faster than 94.31% of JavaScript online submissions for Merge Two Sorted Lists.]
// [Memory Usage: 44.2 MB, less than 47.29% of JavaScript online submissions for Merge Two Sorted Lists.]

var mergeTwoLists = function (list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;

  const head = list1.val < list2.val ? list1 : list2;

  /** Current Element */
  let main = head;

  /** Declare indexes for each list */
  let i = list1 === head ? list1.next : list1;
  let j = list2 === head ? list2.next : list2;

  while (i && j) {
    if (i.val < j.val) {
      main.next = i;
      main = i;
      i = i.next;
    } else {
      main.next = j;
      main = j;
      j = j.next;
    }
  }

  i !== null ? (main.next = i) : (main.next = j);

  return head;
};
