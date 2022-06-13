/**
 * ### Problem:
 * Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero.
 * Print the decimal value of each fraction on a new line with  places after the decimal.
 * 
 * Note: This challenge introduces precision problems. 
 * The test cases are scaled to six decimal places, though answers with absolute error of up to 4 decimal places are acceptable.
 * 
 * Example: arr = [1, 1, 0, -1, -1]
 * 
 * There are 5 elements, two positive, two negative and one zero. 
 * Their ratios are 2/5 = 0.400000, 2/5 = 0.400000 and 1/5 = 0.200000. 
 * 
 * Results are printed as:
 * 0.400000
 * 0.400000
 * 0.200000
 * 
 * Print
 * --------------------------------------------------------------------------------
 * (1) Print the ratios of positive, negative and zero values in the array. 
 * (2) Each value should be printed on a separate line with 6 digits after the decimal. 
 * (3) The function should not return a value.
 */

function plusMinus(arr) {
    const pos = arr.filter(x => x > 0).length / arr.length;
    const neg = arr.filter(x => x < 0).length / arr.length;
    const zero = arr.filter(x => x === 0).length / arr.length;
    
    console.log(`${pos.toFixed(6)}\n${neg.toFixed(6)}\n${zero.toFixed(6)}`);
}

console.log(plusMinus([-4, 3, -9, 0, 4, 1]));