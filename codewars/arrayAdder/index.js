/**
 *
 *
 */

// Method 1: Using object to store the words
function arrAdder(array) {
  const words = {};
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      words[j] = (words[j] ?? '') + array[i][j];
    }
  }
  return Object.values(words).join(' ');
}

// Method 2: Using array to store the words
function arrAdder2(array) {
  const words = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      words[j] = (words[j] ?? '') + array[i][j];
    }
  }
  return words.join(' ');
}

const inputArray = [
  ['J', 'L', 'L', 'M'],
  ['u', 'i', 'i', 'a'],
  ['s', 'v', 'f', 'n'],
  ['t', 'e', 'e', ''],
];
console.log(arrAdder(inputArray));
console.log(arrAdder2(inputArray));
