/**
 * Given an integer numRows, return the first numRows of Pascal's triangle.
 * In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
 *
 * Example 1:
 * ----------
 * Input: numRows = 5
 * Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
 *
 * Example 2:
 * ----------
 * Input: numRows = 1
 * Output: [[1]]
 *
 * Constraints:
 * ------------
 * 1 <= numRows <= 30
 *
 */

/**
 * [Runtime: 57 ms, faster than 96.63% of JavaScript online submissions.]
 * [Memory Usage: 42.1 MB, less than 48.90% of JavaScript online submissions.]
 */
var generate = function (numRows) {
  if (numRows < 1 || numRows > 30) return [];
  const triangle = [];
  for (let i = 0; i < numRows; i++) {
    if (i === 0) {
      triangle.push([1]);
      continue;
    }
    const arr = [1, 1];
    const prevEl = triangle[i - 1];

    for (let j = 0; j < i - 1; j++) {
      const pick = prevEl[j] + prevEl[j + 1];
      arr.splice(j + 1, 0, pick);
    }
    triangle.push(arr);
  }

  return triangle;
};

console.log(generate(5)); // [ [ 1 ], [ 1, 1 ], [ 1, 2, 1 ], [ 1, 3, 3, 1 ], [ 1, 4, 6, 4, 1 ] ]
console.log(generate(6)); // [ [ 1 ], [ 1, 1 ], [ 1, 2, 1 ], [ 1, 3, 3, 1 ], [ 1, 4, 6, 4, 1 ], [ 1, 5, 10, 10, 5, 1 ] ]
