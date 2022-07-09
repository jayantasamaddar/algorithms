const modSet = function () {
  /** Holds the Set */
  const collection = [];

  /** Returns a boolean whether Set contains item */
  this.has = function (item) {
    return collection.indexOf(item) !== -1;
  };

  /** ES6 Set returns an iterator which can then be used to iterate through all values in the Set */
  /** Returns all the values of the Set */
  this.values = function () {
    return collection;
  };

  /** Adds an unique item to the Set */
  this.add = function (item) {
    if (!this.has(item)) collection.push(item);
    return collection;
  };

  /** Deletes an item from the Set */
  this.delete = function (item) {
    if (!this.has(item)) return undefined;
    collection.splice(collection.indexOf(item), 1);
  };

  /** In ES6 size is a property and not a method */
  /** Returns all the values of the Set */
  this.size = function () {
    return collection.length;
  };

  /** THESE BELOW METHODS ARE NOT PART OF ES6 Set */

  /** Returns the union of two Sets as a new Set */
  this.union = function (otherSet) {
    const unionSet = new modSet();
    const firstSet = this.values();
    const secondSet = otherSet.values();

    for (let i = 0; i < firstSet.length; i++) {
      unionSet.add(firstSet[i]);
    }

    for (let i = 0; i < secondSet.length; i++) {
      unionSet.add(secondSet[i]);
    }

    return unionSet;
  };

  /** Return the intersection of two Sets as a new Set */
  this.intersection = function (otherSet) {
    const intersectionSet = new modSet();
    const firstSet = this.values();

    for (let i = 0; i < firstSet.length; i++) {
      if (otherSet.has(firstSet[i])) intersectionSet.add(firstSet[i]);
    }

    return intersectionSet;
  };

  /** Return the difference between the first Set (A) and the second Set (B) as A - B */
  this.difference = function (otherSet) {
    const differenceSet = new modSet();
    const firstSet = this.values();

    for (let i = 0; i < firstSet.length; i++) {
      if (!otherSet.has(firstSet[i])) differenceSet.add(firstSet[i]);
    }

    return differenceSet;
  };

  /** Test if the first Set is the subset of the second Set */
  this.subset = function (otherSet) {
    const firstSet = this.values();

    return firstSet.every(function (e) {
      return otherSet.has(e);
    });
  };
};

/** Tests */
const setA = new modSet();
const setB = new modSet();

setA.add('A');
setA.add('B');
setA.add('D');
setB.add('A');
setB.add('B');
setB.add('C');

console.log(setA.union(setB).values()); // [ 'A', 'B', 'D', 'C' ]
console.log(setA.intersection(setB).values()); // [ 'A', 'B' ]
console.log(setA.difference(setB).values()); // [ 'D' ]
console.log(setA.subset(setB)); // false
setA.delete('D');
console.log(setA.subset(setB)); // true
console.log(setB.subset(setA)); // false
