// Declare a fresh new array to store the snail sort values.
// We need four runs to be iterated until the master Array's length becomes 0, i.e. while(length > 0)
// We will be splicing each digit from existing child arrays as soon as they are written to new array.
// Run 1 = Get first array in order of index.
// Run 2 = For each of rest of the arrays, get the last digit. Check if master array.length > 0
// Run 3 = return items of last array in reverse order. Check if master array.length > 0
// Run 4 == return first items of spreaded reversed list of the masterArray

/* Method 1 */

const snail = array => {
    const arr = [];
    while(array.length > 0) {
        array.splice(0,1)[0].forEach(e => arr.push(e));
        if(array.length > 0) array.forEach(e => arr.push(e.splice(e.length - 1, 1)[0]));
        if(array.length > 0) array.splice(array.length-1, 1)[0].reverse().forEach(e => arr.push(e));
        if(array.length > 0) [...array].reverse().forEach(e => arr.push(e.splice(0,1)[0]));
    }
    return arr;
}

/* Method 2 */
const snail2 = array => {
    const arr = [];
    while(array.length) {
        array.splice(0,1)[0].forEach(e => arr.push(e));
        array.length && array.forEach(e => arr.push(e.splice(e.length - 1, 1)[0]));
        array.length && array.splice(array.length-1, 1)[0].reverse().forEach(e => arr.push(e));
        array.length && [...array].reverse().forEach(e => arr.push(e.splice(0,1)[0]));
    }
    return arr;
}

/* Testing */

array = [
    [1,2,3,4,5],
    [4,5,6,7,8],
    [7,8,9,10,11],
    [10,200,300,400,500],
    [9,220,340,170,8]
]

array2 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

array3 = [
    [1,2,3],
    [8,9,4],
    [7,6,5]
]


console.log(snail(array)); // [1,2,3,4,5,8,11,500,8,170,340,220,9,10,7,4,5,6,7,10,400,300,200,8,9]
console.log(snail(array2)); // [1,2,3,6,9,8,7,4,5]
console.log(snail(array3)); // [1,2,3,4,5,6,7,8,9]

