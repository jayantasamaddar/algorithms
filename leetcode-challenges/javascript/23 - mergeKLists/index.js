/**
 * 23. Merge k Sorted Lists (https://leetcode.com/problems/merge-k-sorted-lists/)
 * ------------------------------------------------------------------------------
 * You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
 * Merge all the linked-lists into one sorted linked-list and return it.
 *
 * Example 1:
 * -----------
 * Input: lists = [[1,4,5],[1,3,4],[2,6]]
 * Output: [1,1,2,3,4,4,5,6]
 * Explanation: The linked-lists are:
 * [
 *  1->4->5,
 *  1->3->4,
 *  2->6
 * ]
 * merging them into one sorted list:
 * 1->1->2->3->4->4->5->6
 *
 * Example 2:
 * ----------
 * Input: lists = []
 * Output: []
 *
 * Example 3:
 * ----------
 * Input: lists = [[]]
 * Output: []
 *
 * Constraints:
 * ------------
 * k == lists.length
 * 0 <= k <= 10^4
 * 0 <= lists[i].length <= 500
 * -104 <= lists[i][j] <= 10^4
 * lists[i] is sorted in ascending order.
 * The sum of lists[i].length will not exceed 10^4.
 */

/** Example Linked List */
function LinkedList() {
  this.size = 0;
  let head = null;

  const Node = function (val) {
    this.val = val;
    this.next = null;
  };

  //   this.size = function () {
  //     return length;
  //   };

  this.head = function () {
    return head;
  };

  /** Adds a new val to the linked list */
  this.add = function (val) {
    const node = new Node(val);
    if (head === null) {
      head = node;
    } else {
      let currentNode = head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }
    this.size += 1;
  };

  /** Removes an new val to the linked list */
  this.remove = function (val) {
    let currentNode = head;
    let previousNode;
    if (currentNode.val === val) {
      head = currentNode.next;
    } else {
      while (currentNode.val !== val) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      previousNode.next = currentNode.next;
    }
    this.size -= 1;
  };

  /** Returns a boolean whether Linked List is empty */
  this.isEmpty = function () {
    return this.size === 0;
  };

  /** Return the index of the val in the Linked List */
  this.indexOf = function (val) {
    let currentNode = head;
    let index = -1;

    while (currentNode) {
      index++;
      if (currentNode.val === val) return index;
      currentNode = currentNode.next;
    }
    return -1;
  };

  /** Find the val at given index */
  this.elementAt = function (index) {
    let currentNode = head;
    let currentIndex = 0;

    while (currentIndex < index) {
      currentNode = currentNode.next;
      currentIndex++;
    }
    return currentNode.val;
  };

  /** Add the new val at given index */
  this.addAt = function (index, val) {
    const node = new Node(val);
    let currentNode = head;
    let previousNode;
    let currentIndex = 0;

    if (index > this.size) return;

    if (index === 0) {
      node.next = currentNode;
      head = node;
    } else {
      while (currentIndex < index) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        currentIndex++;
      }
      node.next = currentNode;
      previousNode.next = node;
    }
    this.size += 1;
  };

  /** Remove the val at given index */
  this.removeAt = function (index) {
    let currentNode = head;
    let previousNode;
    let currentIndex = 0;

    if (index < 0 || index >= this.size) return;

    if (index === 0) {
      head = currentNode.next;
    } else {
      while (currentIndex < index) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        currentIndex++;
      }
      previousNode.next = currentNode.next;
    }
    this.size -= 1;
    return currentNode.val;
  };
}

const list1 = new LinkedList();
list1.add(1);
list1.add(4);
list1.add(5);

const list2 = new LinkedList();
list2.add(1);
list2.add(3);
list2.add(4);

const list3 = new LinkedList();
list3.add(2);
list3.add(6);

console.log(list1.head());
console.log(list2.head());
console.log(list3.head());
console.log(list1.size);

const list = new LinkedList();

/** Two-way Merge Function for Sorted Linked List */
const merge = function (list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;

  const head = list1.val < list2.val ? list1 : list2;

  let currentNode = head;
  let i = head === list1 ? list1.next : list1;
  let j = head === list2 ? list2.next : list2;

  while (i && j) {
    if (i.val < j.val) {
      currentNode.next = i;
      currentNode = i;
      i = i.next;
    } else {
      currentNode.next = j;
      currentNode = j;
      j = j.next;
    }
  }

  i !== null ? (currentNode.next = i) : (currentNode.next = j);

  return head;
};

/** Non-Optimal Merge Sort */
const mergeKLists2 = function (lists) {
  if (!lists.length) return null;

  const merged =
    lists.length >= 2 ? merge(...lists.splice(0, 2)) : lists.splice(0)[0];

  if (lists.length) {
    return mergeKLists([merged, ...lists]);
  } else return merged;
};

/** Optimal Merge Sort */
const mergeKLists = function (lists) {
  const queue = new PriorityQueue();
  lists.forEach(list => queue.enqueue([list.val, list.length]));

  const head = null;
  let currentNode = head;

  while (!queue.isEmpty()) {
    const { val, next } = queue.dequeue().element;
    currentNode.next = val;
    currentNode = val.next;

    if (next) queue.enqueue(next);
  }

  return head.next;
};
