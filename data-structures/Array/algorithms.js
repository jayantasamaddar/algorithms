import util from 'util';

import XArray from './Array.js';

// Test function that takes an array and returns it.
const returnArr = array => array;

/************************************************************************************************/
/** Array using custom XArray constructor **/
/************************************************************************************************/
const xArray = new XArray();
xArray.push('a', 'b', 'c', 'd', 'e');
console.log(xArray); // Prints: [ 'a', 'b', 'c', 'd', 'e' ]
console.log(returnArr(xArray)); // Returns: [ 'a', 'b', 'c', 'd', 'e' ]
console.log(XArray.isArray(xArray)); // Returns: true

console.log(xArray.pop()); // e
console.log(xArray); // [ 'a', 'b', 'c', 'd' ]
console.log(xArray.length); // 4

console.log(xArray.unshift('z', 'x')); // 6
console.log(xArray); // Prints: [ 'z', 'x', 'a', 'b', 'c', 'd' ]
console.log(xArray.length); // Prints: 6

console.log(xArray.shift()); // z
console.log(xArray); // Prints: [ 'x', 'a', 'b', 'c', 'd' ]
console.log(xArray.length); // Prints: 5

const xArray2 = new XArray();
xArray2.push('f', 'g', 'h', 'i', 'j');
console.log(xArray2); // Prints: [ 'f', 'g', 'h', 'i', 'j' ]
console.log(xArray.concat(xArray2)); // Prints: [ 'x', 'a', 'b', 'c', 'd', 'f', 'g', 'h', 'i', 'j' ]

console.log(Object.getOwnPropertyDescriptors(xArray));
/*
[
  { value: 'a', writable: true, enumerable: true, configurable: true },
  { value: 'b', writable: true, enumerable: true, configurable: true },
  { value: 'c', writable: true, enumerable: true, configurable: true },
  { value: 'd', writable: true, enumerable: true, configurable: true },
  { value: 'e', writable: true, enumerable: true, configurable: true },
  { value: 5, writable: true, enumerable: false, configurable: false }
]
*/

/** Iterative Methods */
// forEach(cb)
const container = [];
xArray.forEach((element, index) => {
  container.push({ [index]: element });
});
console.log(container);
/*
[
  { '0': 'x' }, { '1': 'a' },
  { '2': 'b' }, { '3': 'c' },
  { '4': 'd' }, { '5': 'f' },
  { '6': 'g' }, { '7': 'h' },
  { '8': 'i' }, { '9': 'j' }
]
*/

// map(cb)
console.log(xArray.map((element, index) => element + index));
/*
[
  'x0', 'a1', 'b2',
  'c3', 'd4', 'f5',
  'g6', 'h7', 'i8',
  'j9'
]
*/

// reduce(cb, initialValue)
console.log(xArray.reduce((acc, element) => acc + element, '')); // xabcdfghij

// flat(depth)
// const nums = new XArray(0, 1, 2);
// const numsArr = new XArray(3, 4);
// nums.push(numsArr);
// console.log(nums); // [ 0, 1, 2, [ 3, 4 ] ]
// console.log(nums.flat());

// join
const nums1 = new XArray(0, 1, 2);
console.log(nums1.join()); // Prints: 0, 1, 2

// toString()
console.log(xArray.toString());
console.log(nums.toString());

/************************************************************************************************/
/** Array using JavaScript's in-built Array constructor (For Comparison) **/
/************************************************************************************************/
const array = new Array();
array.push('a', 'b', 'c', 'd', 'e');
console.log(array); // [ 'a', 'b', 'c', 'd', 'e' ]
console.log(returnArr(array)); // [ 'a', 'b', 'c', 'd', 'e' ]
console.log(Object.getOwnPropertyDescriptors(array));
/*
[
  { value: 'a', writable: true, enumerable: true, configurable: true },
  { value: 'b', writable: true, enumerable: true, configurable: true },
  { value: 'c', writable: true, enumerable: true, configurable: true },
  { value: 'd', writable: true, enumerable: true, configurable: true },
  { value: 'e', writable: true, enumerable: true, configurable: true },
  { value: 5, writable: true, enumerable: false, configurable: false }
]
*/

class User {
  constructor(name, password) {
    this.name = name;
    this.password = password;

    const runtimeConsole = console;
    console = {
      ...console,
      log: function (data) {
        if (User.isUser(data)) runtimeConsole.log(data.name);
        else runtimeConsole.log(data);
      },
    };
  }

  static isUser(user) {
    return user instanceof User;
  }

  /** Node.js specific implementation */
  //   [util.inspect.custom](depth, opts) {
  //     return Object.values(this);
  //   }
}

const user = new User('example', 'password');

// Test function that takes an user and returns it
const returnUser = user => user;

console.log(user); // Prints: example
console.log(returnUser(user)); // Prints: example

const array1 = [
  [0, 1],
  [2, 3],
  [4, 5],
];

const result = array1.reduceRight((accumulator, currentValue) =>
  accumulator.concat(currentValue)
);

console.log(result);

// const testxArr = new XArray();
// const one = new XArray([0, 1]);
// const two = new XArray([2, 3]);
// const three = new XArray([4, 5]);

// // console.log(Object.getOwnPropertyDescriptors(one));

// testxArr.push([one, two, three]);

// const r = testxArr.reduce((accumulator, currentValue) =>
//   accumulator.concat(currentValue)
// );

// console.log(r);

console.log([1, 3, 4, [[[5, [6]]]]].toString());
