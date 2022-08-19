/**
 * LeetCode 62 - Unique Paths (https://leetcode.com/problems/unique-paths/)
 * ------------------------------------------------------------------------
 * There is a robot on an m x n grid.
 * The robot is initially located at the top-left corner (i.e., grid[0][0]).
 * The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]).
 * The robot can only move either down or right at any point in time.
 *
 * Given the two integers m and n,
 * return the number of possible unique paths that the robot can take to reach the bottom-right corner.
 *
 * The test cases are generated so that the answer will be less than or equal to 2 * 10^9.
 */

/**
 * Method 1 - Using recursive backtracking
 * ---------------------------------------
 * @param {number} m
 * @param {number} n
 * @returns {number}
 */
var uniquePaths = function (m, n) {
  const board = []; // [ 'X000000', '0000000', '0000000' ]
  for (let i = 0; i < m; i++) {
    let row = '';
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) {
        row += 'Robot';
      } else row += 0;
    }
    board.push(row);
  }

  /** Bounding Function */
  const canMove = board => {
    /**
     * Find if the robot has no space to go right or bottom
     */
    let robotRow = board.findIndex((row, i) => row.includes('Robot'));
    let robotColumn = board[robotRow].indexOf('Robot');

    const canMoveRight =
      board[robotRow].slice(robotColumn).indexOf(0) > robotColumn;
    const canMoveDown =
      board
        .slice(robotRow + 1)
        .findIndex(row => row.indexOf('X') !== robotColumn) >= 0;

    if (canMoveDown) return 'down';
    else if (canMoveRight) return 'right';
    else return false;
  };

  /** Move Robot */
  const moveRobot = board => {};

  /** Generate Solutions */
  const permutations = (board, combo = [], permutations = []) => {
    if (!canMove) return permutations.length;
  };
  return permutations(board);
};

console.log(uniquePaths(3, 7));
