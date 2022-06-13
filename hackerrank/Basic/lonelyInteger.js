/**
 * Given an array of integers, where all elements but one occur twice, find the unique element.
 * 
 * Example
 * --------
 * a = [1, 2, 3, 4, 3, 2, 1]
 * 
 * The unique element is 4.
 * 
 * 
 * Complete the lonelyinteger function in the editor below.
 * 
 * lonelyinteger has the following parameter(s):
 * ----------------------------------------------
 * a is an array of integers
 * 
 * Returns
 * -------
 * The element that occurs only once.
 * 
 */

function lonelyinteger(a) {
    for(let i = 0; i < a.length; i++) {
        let count = 0;
        for(let j = 0; j < a.length; j++) {
            if(a[i] === a[j]) count++
        }
        if(count === 1) return a[i];
    }
}

console.log(lonelyinteger([1, 2, 3, 4, 3, 2, 1]))