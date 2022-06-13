/**
 * Given five positive integers, 
 * Find the minimum and maximum values that can be calculated by summing exactly 4 of the 5 integers. 
 * Then print the respective minimum and maximum values as a single line of two space-separated long integers.
 * 
 * Example
 * -------
 * arr = [1,3,5,7,9]
 * 
 * The minimum sum is 1 + 3 + 5 + 7 = 16 and the maximum sum is 3 + 5 + 7 + 9 = 24. 
 * The function prints:
 * 
 * 16 24
 * 
 * Sample Input
 * ------------
 * 1 2 3 4 5
 * 
 * Sample Output
 * -------------
 * 10 14
 * 
 * Print
 * ------
 * Print two space-separated integers on one line: 
 * The minimum sum and the maximum sum of 4 of 5 elements.
 */


function miniMaxSum(arr) {
    const sortedArr = arr.sort((a, b) => a - b);
    const minSum = sortedArr.slice(0, sortedArr.length - 1).reduce((acc, n) => acc + n, 0);
    const maxSum = sortedArr.slice(1).reduce((acc, n) => acc + n, 0);

    console.log(`${minSum} ${maxSum}`);
}

console.log(miniMaxSum([1, 2, 3, 4, 5]));