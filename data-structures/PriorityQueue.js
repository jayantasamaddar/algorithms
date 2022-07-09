const PriorityQueue = function () {
  const collection = [];

  /** Prints the Queue onto the console */
  this.print = function () {
    const result = [];
    for (let i = 0; i < collection.length; i++) {
      result.push(collection[i][0]);
    }
    return result;
  };

  /** Insert an item onto the Queue */
  this.enqueue = function (item) {
    if (this.isEmpty()) {
      collection.push(item);
    } else {
      let added = false;
      for (let i = 0; i < collection.length; i++) {
        // Check if priority is higher, then insert item before the item in the collection
        if (item[1] < collection[i][1]) {
          collection.splice(i, 0, item);
          added = true;
          break;
        }
      }
      if (!added) collection.push(item);
    }
    return collection;
  };

  /** Remove an item from the Queue and returns it */
  this.dequeue = function () {
    return collection.shift()[0];
  };

  /** Returns the first item of the Queue without removing it */
  this.front = function () {
    return collection[0][0];
  };

  /** Returns the length of the Queue */
  this.size = function () {
    return collection.length;
  };

  /** Returns a Boolean value whether the Queue contains no items */
  this.isEmpty = function () {
    return collection.length === 0;
  };
};

/** Tests */
const queue = new PriorityQueue();

console.log(queue.enqueue(['A', 2])); // [ [ 'A', 2 ] ]
console.log(queue.enqueue(['B', 3])); // [ [ 'A', 2 ], [ 'B', 3 ] ]
console.log(queue.enqueue(['C', 2])); // [ [ 'A', 2 ], [ 'C', 2 ], [ 'B', 3 ] ]
console.log(queue.enqueue(['D', 1])); // [ [ 'D', 1 ], [ 'A', 2 ], [ 'C', 2 ], [ 'B', 3 ] ]
console.log(queue.dequeue()); // D
console.log(queue.print()); // [ 'A', 'C', 'B' ]
console.log(queue.front()); // A
console.log(queue.isEmpty()); // false
