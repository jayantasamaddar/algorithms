/* Method 1 */
const findOdd = A => A.find(item => A.filter(a => a === item).length % 2 !==0)

/* Method 2*/
const findOdd2 = A => A.reduce((acc, item) => acc ^ item);

// console.log(findOdd([7])); // returns 7
// console.log(findOdd([0,1,0,1,0])); // returns 0
console.log({findOdd: findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1])}); // returns 4
console.log({findOdd2: findOdd2([1,2,2,3,3,3,4,3,3,3,2,2,1])}); // returns 4