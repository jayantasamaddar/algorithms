/**
 * In MATLAB, there is a handy function called reshape which can reshape an m x n matrix into a new one with a different size r x c keeping its original data.
 *
 * You are given an m x n matrix mat and two integers r and c representing the number of rows and the number of columns of the wanted reshaped matrix.
 *
 * The reshaped matrix should be filled with all the elements of the original matrix in the same row-traversing order as they were.
 *
 * If the reshape operation with given parameters is possible and legal, output the new reshaped matrix;
 * Otherwise, output the original matrix.
 *
 * Example 1:
 * ----------
 *
 * Input: mat = [[1,2],[3,4]], r = 1, c = 4
 * Output: [[1,2,3,4]]
 *
 * Example 2:
 * ----------
 *
 * Input: mat = [[1,2],[3,4]], r = 2, c = 4
 * Output: [[1,2],[3,4]]
 *
 */

/**
 * [Runtime: 145 ms, faster than 17.21% of JavaScript online submissions.]
 * [Memory Usage: 49.3 MB, less than 5.47% of JavaScript online submissions.]
 */
var matrixReshape = function (mat, r, c) {
  const arr = mat.reduce((acc, arr) => [...acc, ...arr], []);
  if (r * c !== arr.length) return mat;

  const rows = [];
  
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
        const splice = arr.splice(0, c);
        splice.length && rows.push(splice);
      }
  }

  return rows;
};

/** Tests */
console.log(matrixReshape([ [1, 2], [3, 4], ], 1, 4)); // [ [ 1, 2, 3, 4 ] ]
console.log(matrixReshape([ [1, 2], [3, 4], ], 2, 2 ) ); // [ [ 1, 2 ], [ 3, 4 ] ]
console.log(matrixReshape([ [1, 2], [3, 4] ], 4, 1)); // [ [ 1 ] , [ 2 ] , [ 3 ] , [ 4 ] ]
console.log(matrixReshape([ [1, 2], [3, 4] ], 2, 4)); // [ [ 1, 2 ], [ 3, 4 ] ]