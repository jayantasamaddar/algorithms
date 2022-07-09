const Queue = function () {
  const collection = [];

  /** Prints the Queue onto the console */
  this.print = function () {
    console.log(collection);
  };

  /** Insert an item onto the Queue */
  this.enqueue = function (item) {
    collection.push(item);
    return collection;
  };

  /** Remove an item from the Queue and returns it */
  this.dequeue = function () {
    return collection.shift();
  };

  /** Returns the first item of the Queue without removing it */
  this.front = function () {
    return collection[0];
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
const queue = new Queue();

console.log(queue.enqueue('A')); // [ 'A' ]
console.log(queue.enqueue('B')); // [ 'A', 'B' ]
console.log(queue.enqueue('C')); // [ 'A', 'B', 'C' ]
console.log(queue.enqueue('D')); // [ 'A', 'B', 'C', 'D' ]
console.log(queue.dequeue()); // A
console.log(queue.print()); // [ 'B', 'C', 'D' ]
console.log(queue.front()); // B
console.log(queue.isEmpty()); // false
