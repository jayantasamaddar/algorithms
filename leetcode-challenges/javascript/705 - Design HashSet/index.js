/**
 * 705 - Design HashSet
 * ----------------------------------------------------------
 * Design a HashSet without using any built-in hash table libraries.
 *
 * Implement MyHashSet class:
 *
 * - void add(key) Inserts the value key into the HashSet.
 * - bool contains(key) Returns whether the value key exists in the HashSet or not.
 * - void remove(key) Removes the value key in the HashSet. If key does not exist in the HashSet, do nothing.
 *
 */

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */

/**
 * Method 1 - Using Array
 * [Runtime: 515 ms, faster than 13.16% of JavaScript online submissions for Design HashSet.]
 * [Memory Usage: 52 MB, less than 69.83% of JavaScript online submissions for Design HashSet.]
 */

var MyHashSet = function () {
  this.set = [];
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
  if (!this.contains(key)) this.set.push(key);
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
  if (!this.contains(key)) return;
  this.set.splice(this.set.indexOf(key), 1);
};

/**
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
  return this.set.indexOf(key) >= 0;
};

/**
 * Method 2 - Using LinkedList
 * ---------------------------
 * [Runtime: 947 ms, faster than 5.16% of JavaScript online submissions for Design HashSet.]
 * [Memory Usage: 51.2 MB, less than 87.17% of JavaScript online submissions for Design HashSet.]
 */

var ListNode = function (val = null, next = null) {
  this.val = val;
  this.next = next;
};

var MyHashSet = function () {
  this.head = null;
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
  let currentNode = this.head;
  if (currentNode === null) {
    this.head = new ListNode(key);
    return;
  }
  if (currentNode.val === key) return;
  else {
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
      if (currentNode.val === key) return;
    }
    currentNode.next = new ListNode(key);
  }
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
  if (this.head === null) return;
  let currentNode = this.head;
  if (currentNode.val === key) this.head = currentHead.next;
  else {
    let previousNode = null;
    while (currentNode !== null && currentNode.val !== key) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    if (currentNode === null) return;
    previousNode.next = currentNode.next;
  }
};

/**
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
  let currentNode = this.head;
  while (currentNode !== null) {
    if (currentNode.val === key) return true;
    currentNode = currentNode.next;
  }
  return false;
};

/**
 * Method 3 - Using as an object (object properties are unique keys)
 * -----------------------------------------------------------------
 * [Runtime: 259 ms, faster than 54.33% of JavaScript online submissions for Design HashSet.]
 * [Memory Usage: 51.9 MB, less than 73.67% of JavaScript online submissions for Design HashSet.]
 */

var MyHashSet3 = function () {};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet3.prototype.add = function (key) {
  this[key] = true;
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet3.prototype.remove = function (key) {
  delete this[key];
};

/**
 * @param {number} key
 * @return {boolean}
 */
MyHashSet3.prototype.contains = function (key) {
  return key in this;
};

/******************************************************************************/
/** Testing */
/******************************************************************************/

/** For Method 1 & 2 */
const list = new MyHashSet();
list.add(1);
list.add(2);
console.log(list); // {"head":{"val":1,"next":{"val":2,"next":null}}}
console.log(list.contains(1)); // true
console.log(list.contains(3)); // false
list.add(2);
console.log(JSON.stringify(list)); // {"head":{"val":1,"next":{"val":2,"next":null}}}
console.log(list.contains(2)); // true
list.remove(2);
console.log(list.contains(2)); // false

/** For Method 3 */
const list3 = new MyHashSet3();
list3.add(1);
list3.add(2);
console.log(list3); // {"head":{"val":1,"next":{"val":2,"next":null}}}
console.log(list3.contains(1)); // true
console.log(list3.contains(3)); // false
list3.add(2);
console.log(JSON.stringify(list3)); // {"head":{"val":1,"next":{"val":2,"next":null}}}
console.log(list3.contains(2)); // true
list3.remove(2);
console.log(list3.contains(2)); // false
