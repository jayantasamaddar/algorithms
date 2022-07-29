/**
 *
 * 707. Design Linked List
 * ------------------------
 * [Runtime: 130 ms, faster than 95.33% of JavaScript online submissions for Design Linked List.]
 * [Memory Usage: 50.1 MB, less than 86.81% of JavaScript online submissions for Design Linked List.]
 */

var ListNode = function (val = null, next = null) {
  this.val = val;
  this.next = next;
};

var MyLinkedList = function () {
  this.head = null;
  this.size = 0;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index < 0 || this.size === 0 || index > this.size - 1) return -1;

  let currentIndex = -1;
  let currentNode = this.head;

  while (currentNode !== null) {
    currentIndex++;
    if (currentIndex === index) return currentNode.val;
    currentNode = currentNode.next;
  }
  return -1;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val = null) {
  const node = new ListNode(val);
  let currentNode = this.head;
  if (currentNode === null) {
    this.head = node;
  } else {
    node.next = currentNode;
    this.head = node;
  }
  this.size++;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val = null) {
  const node = new ListNode(val);
  let currentNode = this.head;
  if (currentNode === null) {
    this.head = node;
  } else {
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
  }
  this.size++;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index < 0 || index > this.size) return;

  const node = new ListNode(val);

  let currentIndex = 0;
  let currentNode = this.head;
  let previousNode = new MyLinkedList();
  if (index === 0) {
    node.next = currentNode;
    this.head = node;
  } else {
    while (currentIndex < index) {
      if (currentNode === null) return;
      previousNode = currentNode;
      currentNode = currentNode.next;
      currentIndex++;
    }
    node.next = currentNode;
    previousNode.next = node;
  }
  this.size++;
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (this.size === 0 || index < 0 || index > this.size - 1) return;

  let currentNode = this.head;
  let previousNode = null;
  let currentIndex = 0;

  if (index === 0) {
    this.head = currentNode.next;
  } else {
    while (currentIndex < index) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      if (currentNode === null && currentIndex < index) return;
      currentIndex++;
    }
    previousNode.next = currentNode.next;
  }
  this.size--;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

/***********************************************************************************************/

// const obj = new MyLinkedList();
// obj.addAtHead(1);
// console.log(obj); // MyLinkedList { val: 1, next: null }

// obj.addAtTail(3);
// console.log(obj); // MyLinkedList { val: 1, next: MyLinkedList { val: 3, next: null } }

// obj.addAtIndex(1, 2);
// console.log(obj); // MyLinkedList { val: 1, next: MyLinkedList { val: 2, next: MyLinkedList { val: 3, next: null } } }

// console.log(obj.get(1)); // MyLinkedList { val: 2, next: MyLinkedList { val: 3, next: null } }

// obj.deleteAtIndex(1);
// console.log(obj); // MyLinkedList { val: 1, next: MyLinkedList { val: 3, next: null } }

// console.log(obj.get(1)); // MyLinkedList { val: 3, next: null }

/*
["MyLinkedList","addAtHead","addAtHead","addAtHead","addAtIndex","deleteAtIndex","addAtHead","addAtTail","get","addAtHead","addAtIndex","addAtHead"]
[[],[7],[2],[1],[3,0],[2],[6],[4],[4],[4],[5,0],[6]]
*/
// const list = new MyLinkedList();
// list.addAtHead(7);
// console.log(list);

// list.addAtHead(2);
// console.log(list);

// list.addAtHead(1);
// console.log(list);

// list.addAtIndex(3, 0);
// console.log(JSON.stringify(list));

// list.deleteAtIndex(2);
// console.log(list);

// list.addAtHead(6);

// list.addAtTail(4);

// console.log(JSON.stringify(list));
// // {"val":6,"next":{"val":1,"next":{"val":2,"next":{"val":0,"next":{"val":4,"next":null}}}}}

// console.log(list.get(4)); // 4

// list.addAtHead(4);

// list.addAtIndex(5, 0);

// console.log(JSON.stringify(list));

// list.addAtHead(6);

/**
 * ["MyLinkedList","addAtHead","addAtTail","addAtIndex","get","deleteAtIndex","get"]
[[],[1],[3],[1,2],[1],[0],[0]]
 */

// const li = new MyLinkedList();
// li.addAtHead(1);
// console.log(li); // MyLinkedList { val: 1, next: null }

// li.addAtTail(3);
// console.log(li); // MyLinkedList { val: 1, next: MyLinkedList { val: 3, next: null } }

// li.addAtIndex(1, 2);
// console.log(li); // MyLinkedList { val: 1, next: MyLinkedList { val: 2, next: MyLinkedList { val: 3, next: null } } }

// console.log(li.get(1)); // 2

// li.deleteAtIndex(0);

// console.log(li.get(0));

/**
 * ["MyLinkedList","addAtHead","deleteAtIndex"]
 * [[],[1],[0]]
 */

// const l = new MyLinkedList();
// l.addAtHead(1);
// console.log(l);
// l.deleteAtIndex(0);

// console.log(l);

/**
 * ["MyLinkedList","addAtIndex","addAtIndex","addAtIndex","get"]
 * [[],[0,10],[0,20],[1,30],[0]]
 */

// const listE = new MyLinkedList();
// listE.addAtIndex(0, 10);
// console.log(listE); // MyLinkedList { val: 10, next: null }
// listE.addAtIndex(0, 20);
// console.log(listE); // MyLinkedList { val: 20, next: { val: 10, next: null } }
// listE.addAtIndex(1, 30);
// console.log(listE); // MyLinkedList { val: 20, next: MyLinkedList { val: 30, next: { val: 10, next: null } } }
// console.log(listE.get(0)); // 20

/***********************************************************************************************/

/**
 * ["MyLinkedList","addAtHead","deleteAtIndex","addAtHead","addAtHead","addAtHead","addAtHead","addAtHead","addAtTail","get","deleteAtIndex","deleteAtIndex"]
 * [[],[2],[1],[2],[7],[3],[2],[5],[5],[5],[6],[4]]
 */

// const listF = new MyLinkedList();

// listF.addAtHead(2);
// console.log(listF); // MyLinkedList { head: ListNode { val: 2, next: null }, size: 1 }

// listF.deleteAtIndex(1);
// console.log(listF); // MyLinkedList { head: ListNode { val: 2, next: null }, size: 1 }

// listF.addAtHead(2);
// listF.addAtHead(7);
// listF.addAtHead(3);
// listF.addAtHead(2);
// listF.addAtHead(5);
// console.log(listF);
// listF.addAtTail(5);
// console.log(listF);
// console.log(listF.get(5)); // 2
// listF.deleteAtIndex(6);
// listF.deleteAtIndex(4);
// console.log(listF);

/***********************************************************************************************/

/**
 * ["MyLinkedList","addAtHead","addAtTail","addAtIndex","get","deleteAtIndex","get","get","deleteAtIndex","deleteAtIndex","get","deleteAtIndex","get"]
 * [[],[1],[3],[1,2],[1],[1],[1],[3],[3],[0],[0],[0],[0]]
 */

//  const listG = new MyLinkedList();

//  listG.addAtHead(1);
//  listG.addAtTail(3);
//  console.log(listG); // MyLinkedList { head: ListNode { val: 1, next: ListNode { val: 3, next: null } }, size: 2 }
//  listG.addAtIndex(1, 2);
//  console.log(listG); // MyLinkedList { val: 1, next: MyLinkedList { val: 2, next: MyLinkedList { val: 3, next: null } } }
//  console.log(listG.get(1)); // 2

//  listG.deleteAtIndex(1);
//  console.log(listG.get(1)); // 3
//  console.log(listG.get(3)); // -1

//  console.log(listG); // MyLinkedList { val: 1, next: MyLinkedList { val: 3, next: null } }

//  listG.deleteAtIndex(3);
//  console.log(listG); // MyLinkedList { val: 1, next: MyLinkedList { val: 3, next: null } }

//  listG.deleteAtIndex(0);
//  console.log(listG); // MyLinkedList { val: 3, next: null }

//  console.log(listG.get(0)); // 3

//  listG.deleteAtIndex(0);
//  console.log(listG); // MyLinkedList { val: null, next: null }

//  console.log(listG.get(0)); //

/***********************************************************************************************/

/**
 * ["MyLinkedList","addAtTail","get"]
 * [[],[1],[0]]
 */

const listH = new MyLinkedList();
listH.addAtTail(1);
console.log(listH);
