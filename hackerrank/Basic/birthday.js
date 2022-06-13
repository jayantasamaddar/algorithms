/**
 * Two children, Lily and Ron, want to share a chocolate bar. 
 * Each of the squares has an integer on it.

 * Lily decides to share a contiguous segment of the bar selected such that:

 * The length of the segment matches Ron's birth month, and, 
 * The sum of the integers on the squares is equal to his birth day.
 * Determine how many ways she can divide the chocolate.
 * 
 * s = [2,2,1,3,2]
 * d = 4
 * m = 2
 * 
 * Lily wants to find segments summing to Ron's birth day, d = 4 with a length equalling his birth month, m = 2. 
 * In this case, there are two segments meeting her criteria: [2,2] and [1,3].
 * 
 * Returns
 * -------
 * int: the number of ways the bar can be divided
 * 
 */

function birthday(s, d, m) {
    const arr = [];
    let i = 0; 
    while(i < s.length - m + 1) {
        const pair = s.slice(i, i + m);
        if(pair.reduce((acc, n) => acc + n, 0) === d) {
            arr[arr.length] = pair;
        }
        i++;
    }
    return arr.length;
}

const arr = [2,2,1,3,2]
const arr2 = [4]
const arr0 = [1, 2, 1, 3, 2];
console.log(birthday(arr, 4, 2));
console.log(birthday(arr2, 4, 1));
console.log(birthday(arr0, 3, 2));