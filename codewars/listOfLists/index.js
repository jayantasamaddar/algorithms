/**
 * You have a two-dimensional list in the following format:

data = [[2, 5], [3, 4], [8, 7]]
Each sub-list contains two items, and each item in the sub-lists is an integer.

Write a function process_data()/processData() that processes each sub-list like so:

[2, 5] --> 2 - 5 --> -3
[3, 4] --> 3 - 4 --> -1
[8, 7] --> 8 - 7 --> 1
and then returns the product of all the processed sub-lists: -3 * -1 * 1 --> 3.
 */

// Solution 1: Using C-style for Loop
function processData(data) {
  const numList = [];
  for (let i = 0; i < data.length; i++) {
    numList[i] = data[i][0] - data[i][1];
  }
  return numList.reduce((acc, n) => acc * n, 1);
}

// Solution 2: Using reduce
const processData2 = data =>
  data.reduce((acc, arr) => acc * (arr[0] - arr[1]), 1);

console.log(
  processData([
    [2, 5],
    [3, 4],
    [8, 7],
  ])
);

console.log(
  processData2([
    [2, 5],
    [3, 4],
    [8, 7],
  ])
);
