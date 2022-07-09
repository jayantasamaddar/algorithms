const Stack = function () {
  this.count = 0;
  this.storage = {};

  this.push = function (value) {
    this.storage[this.count++] = value;
  };

  this.pop = function () {
    if (this.count === 0) return undefined;

    this.count--;
    const result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };

  this.size = function () {
    return this.count;
  };

  this.peek = function () {
    return this.storage[this.count - 1];
  };
};

const myStack = new Stack();

myStack.push(1);
myStack.push(2);
myStack.pop();
console.log(myStack.size());
myStack.push(3);
console.log(myStack.peek());
