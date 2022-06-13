const moveZeros = (arr) => arr.filter(val => val !== 0).concat(arr.filter(val => val === 0));

//desired result: [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]
//got: [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]
console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]));