/**
 * Intersection of Two Linked Lists - II
 * -------------------------------------
 * [Runtime: 88 ms, faster than 97.45% of JavaScript online submissions for Intersection of Two Linked Lists.]
 * [Memory Usage: 49.4 MB, less than 89.31% of JavaScript online submissions for Intersection of Two Linked Lists.]
 */

var getIntersectionNode = function (headA, headB) {
  if (headA === null || headB === null) return null;
  let currentNodeA = headA;
  let currentNodeB = headB;

  while (currentNodeA !== currentNodeB) {
    if (currentNodeA === null) {
      currentNodeA = headB;
    } else {
      currentNodeA = currentNodeA.next;
    }

    if (currentNodeB === null) {
      currentNodeB = headA;
    } else {
      currentNodeB = currentNodeB.next;
    }
  }
  return currentNodeA;
};
