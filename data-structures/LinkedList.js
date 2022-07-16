/** Linked List */

function LinkedList() {
  let length = 0;
  let head = null;

  const Node = function (element) {
    this.element = element;
    this.next = null;
  };

  this.size = function () {
    return length;
  };

  this.head = function () {
    return head;
  };

  /** Adds a new element to the linked list */
  this.add = function (element) {
    const node = new Node(element);
    if (head === null) {
      head = node;
    } else {
      let currentNode = head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }
    length++;
  };

  /** Removes an new element to the linked list */
  this.remove = function (element) {
    let currentNode = head;
    let previousNode;
    if (currentNode.element === element) {
      head = currentNode.next;
    } else {
      while (currentNode.element !== element) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      previousNode.next = currentNode.next;
    }
    length--;
  };

  /** Returns a boolean whether Linked List is empty */
  this.isEmpty = function () {
    return length === 0;
  };

  /** Return the index of the element in the Linked List */
  this.indexOf = function (element) {
    let currentNode = head;
    let index = -1;

    while (currentNode) {
      index++;
      if (currentNode.element === element) return index;
      currentNode = currentNode.next;
    }
    return -1;
  };

  /** Find the element at given index */
  this.elementAt = function (index) {
    let currentNode = head;
    let currentIndex = 0;

    while (currentIndex < index) {
      currentNode = currentNode.next;
      currentIndex++;
    }
    return currentNode.element;
  };

  /** Add the new element at given index */
  this.addAt = function (index, element) {
    const node = new Node(element);
    let currentNode = head;
    let previousNode;
    let currentIndex = 0;

    if (index > length) return;

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
    length++;
  };

  /** Remove the element at given index */
  this.removeAt = function (index) {
    let currentNode = head;
    let previousNode;
    let currentIndex = 0;

    if (index < 0 || index >= length) return;

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
    length--;
    return currentNode.element;
  };
}

/** Tests */

const list = new LinkedList();

list.add('Kitten');
list.add('Puppy');
list.add('Cub');
list.add('Foal');
list.add('Calf');

console.log(list.size()); // 5
console.log(list.indexOf('Foal')); // 3
console.log(list.addAt(4, 'Lion'));
console.log(list.size()); // 6
console.log(list.elementAt(4)); // Lion
console.log(list.removeAt(4)); // Lion
console.log(list.size()); // 5
console.log(list.elementAt(4)); // Calf
