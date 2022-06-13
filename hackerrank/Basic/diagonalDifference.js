/**
 * Given a square matrix, calculate the absolute difference between the sums of its diagonals.
 * 
 * Square Matrix arr is given:- 
 * [ 1, 2, 3,
     4, 5, 6,
     9, 8, 9 ]

 * The left-to-right diagonal = 1 + 5 + 9 = 15
 * The right-to-left diagonal = 3 + 5 + 9 = 17
 * 
 * Result
 * -------
 * The absolute difference = 2;
 */

function diagonalDifference(arr) {
    let leftToRightDiagonal = 0;
    let rightToLeftDiagonal = 0;

    for (let i = 0; i < arr.length; i++) {
        let left = 0;
        for (let j = 0; j < arr[i].length; j++) {
            leftToRightDiagonal += arr[i][i]
            rightToLeftDiagonal += arr[i][arr.length - 1 - i];
            break;
        }
    }

    return Math.abs(leftToRightDiagonal - rightToLeftDiagonal)
}     


/* When only an array is given */
function diagonalDifference2(arr) {
    const n = Math.sqrt(arr.length);
    let i = n;
    const arrOfArr = [];
    while(i > 0) {
        arrOfArr.unshift(arr.slice(n*(i-1),n*i));
        i--;
    }
    let leftToRightDiagonal = 0;
    let rightToLeftDiagonal = 0;

    for (let i = 0; i < arrOfArr.length; i++) {
        let left = 0;
        for (let j = 0; j < arrOfArr[i].length; j++) {
            leftToRightDiagonal += arrOfArr[i][i]
            rightToLeftDiagonal += arrOfArr[i][arrOfArr.length - 1 - i];
            break;
        }
    }

    return Math.abs(leftToRightDiagonal - rightToLeftDiagonal)
}

const arr = [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 9, 8, 9 ] ];

const arr2 = 
[ 1, 2, 3,
  4, 5, 6,
  9, 8, 9 ]


console.log(diagonalDifference(arr));
// console.log(diagonalDifference2(arr2));