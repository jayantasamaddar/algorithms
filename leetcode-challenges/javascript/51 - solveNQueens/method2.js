/**
 * Method 2 - Using String Interpolation
 * --------------------------------------
 * [Runtime: 190 ms, faster than 9.97% of JavaScript online submissions for N-Queens.]
 * [Memory Usage: 51.4 MB, less than 5.08% of JavaScript online submissions for N-Queens.]
 */

const solveNQueens = n => {
  const firstRow = 'Q'.padEnd(n, '.');

  /** Bounding Function */
  const isSafe = rows => {
    if (!rows?.length) return null;
    const rowIndex = rows.length - 1;
    const rest = rows.slice(0, rowIndex);
    const queenIndex = rows[rowIndex].indexOf('Q');

    for (let i = 0; i < rest.length; i++) {
      const difference = rowIndex - i;
      const currQueenIndex = rest[i].indexOf('Q');
      if (
        currQueenIndex - difference === queenIndex ||
        currQueenIndex === queenIndex ||
        currQueenIndex + difference === queenIndex
      ) {
        return false;
      }
    }
    return true;
  };

  /** Generate the next row */
  const generateNextRow = (ROWS, max = n) => {
    const rows = [...ROWS];
    if (rows.length >= max) return null;
    else {
      let queenPlaced = false;
      let row = '';
      for (let i = 0; i < max; i++) {
        if (queenPlaced) row += '.';
        else {
          let isSafe = false;
          for (let j = 0; j < rows.length; j++) {
            const difference = rows.length - j;
            const rowQueenIndex = rows[j].indexOf('Q');
            if (
              rowQueenIndex - difference === i ||
              rowQueenIndex === i ||
              rowQueenIndex + difference === i
            ) {
              isSafe = false;
              break;
            } else {
              isSafe = true;
            }
          }
          if (isSafe) {
            row += 'Q';
            queenPlaced = true;
          } else row += '.';
        }
      }
      rows.push(row);
      return queenPlaced ? rows : null;
    }
  };

  /** Move First Row Queen and generate row */
  const generateRows = (rows, max = n) => {
    /**
     * (1) Take the last element and see if Queen can move one to the right.
     * (2) If yes, generate Rows with the modified last Row.
     *     If no, remove the last Row, and see if the row above can now move one to the right.
     * (3) Recurse (2) Until yes, or until row.length === 0. Then return null.
     */

    if (!rows?.length) return null;

    const lastRow = rows.pop();
    const queenIndx = lastRow.indexOf('Q');
    if (queenIndx < max - 1) {
      const pick = 'Q'.padEnd(max - 1 - queenIndx, '.').padStart(max, '.');

      const newRows = [...rows, pick];
      if (!isSafe(newRows)) {
        return generateRows(newRows);
      } else {
        return newRows;
      }
    } else {
      return generateRows(rows);
    }
  };

  /** Generate all Possible Solutions */
  const generateSolutions = (rows, solutions = []) => {
    if (rows === null) return solutions;

    /** There are < n columns */
    if (rows.length < n) {
      /** Generate next Row */
      const newRows = generateNextRow(rows);
      /** Run the function again */
      if (newRows !== null) {
        return generateSolutions(newRows, solutions);
      } else {
        /**
         * (1) Backtrack and generate new iteration
         * (2) Run generateSolutions() again
         */
        const newRows = generateRows([...rows]);
        return generateSolutions(newRows, solutions);
      }
    } else {
      /** When rows.length === n */
      solutions.push(rows);
      /**
       * For a two dimensional Array, a shallow copy with Array.slice() or [...arr] is not enough.
       * It will cause the original array to be overwritten.
       * We need to do a "DEEP COPY" with Array.map().
       */
      const newRows = generateRows([...rows]);

      // Run the function again
      return generateSolutions(newRows, solutions);
    }
  };

  return generateSolutions([firstRow]);
};

console.log(solveNQueens(4));

/*
  [n === 4] [Solutions: 2]
  
  [
    [ '.Q..', '...Q', 'Q...', '..Q.' ],
    [ '..Q.', 'Q...', '...Q', '.Q..' ]
  ]
  
  ********************************************************************************************
  
  [n === 5] [Solutions: 10]
  
  [
    [ 'Q....', '..Q..', '....Q', '.Q...', '...Q.' ],
    [ 'Q....', '...Q.', '.Q...', '....Q', '..Q..' ],
    [ '.Q...', '...Q.', 'Q....', '..Q..', '....Q' ],
    [ '.Q...', '....Q', '..Q..', 'Q....', '...Q.' ],
    [ '..Q..', 'Q....', '...Q.', '.Q...', '....Q' ],
    [ '..Q..', '....Q', '.Q...', '...Q.', 'Q....' ],
    [ '...Q.', 'Q....', '..Q..', '....Q', '.Q...' ],
    [ '...Q.', '.Q...', '....Q', '..Q..', 'Q....' ],
    [ '....Q', '.Q...', '...Q.', 'Q....', '..Q..' ],
    [ '....Q', '..Q..', 'Q....', '...Q.', '.Q...' ]
  ]

  
  ********************************************************************************************
    
  [n === 6] [Solutions: 4]
  
  [
    [ '.Q....', '...Q..', '.....Q', 'Q.....', '..Q...', '....Q.' ],
    [ '..Q...', '.....Q', '.Q....', '....Q.', 'Q.....', '...Q..' ],
    [ '...Q..', 'Q.....', '....Q.', '.Q....', '.....Q', '..Q...' ],
    [ '....Q.', '..Q...', 'Q.....', '.....Q', '...Q..', '.Q....' ]
  ]
  
  ********************************************************************************************
  
  [n === 7] [Solutions: 40]
  
  ********************************************************************************************
  
  [n === 8] [Solutions: 92]
  
  
  ********************************************************************************************
  
  */
