/* Method 1 (Not Preferable as splice mutates the array) */
const comp = (a, b) => {
    !!a && !!b && b.map(n => Math.sqrt(n)).forEach(x => a.indexOf(x) > -1 && a.splice(a.indexOf(x), 1));
    return a.length > 0 ? false : true;
}

/* Method 2 - Sorting the arrays and then converting to comparable Strings before comparing */
const comp2 = (a, b) => !!a && !!b && b.map(n => Math.sqrt(n)).sort().join() === a.sort().join();
const comp2b = (a, b) => !!a && !!b && a.map(n => n*n).sort().join() === b.sort().join();


/* Testing */
console.log({comp: comp([121, 144, 19, 161, 19, 144, 19, 11], [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19])});
console.log({comp2: comp([121, 144, 19, 161, 19, 144, 19, 11], [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19])});
console.log({comp2b: comp([121, 144, 19, 161, 19, 144, 19, 11], [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19])});

console.log({comp: comp([121, 144, 19, 161, 19, 144, 19, 11], [132, 14641, 20736, 361, 25921, 361, 20736, 361])});
console.log({comp2: comp([121, 144, 19, 161, 19, 144, 19, 11], [132, 14641, 20736, 361, 25921, 361, 20736, 361])});
console.log({comp2b: comp([121, 144, 19, 161, 19, 144, 19, 11], [132, 14641, 20736, 361, 25921, 361, 20736, 361])});

console.log({comp: comp([2, 1, 3, 10, 6, 10, 7, 6, 0, 0, 9], [9, 36, 1, 100, 36, 0, 49, 81, 1, 100, 4])});
console.log({comp2: comp([2, 1, 3, 10, 6, 10, 7, 6, 0, 0, 9], [9, 36, 1, 100, 36, 0, 49, 81, 1, 100, 4])});
console.log({comp2b: comp([2, 1, 3, 10, 6, 10, 7, 6, 0, 0, 9], [9, 36, 1, 100, 36, 0, 49, 81, 1, 100, 4])});