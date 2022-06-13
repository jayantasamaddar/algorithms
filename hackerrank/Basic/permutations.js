/**
 * arr = [18, 73, 55, 59, 37, 13, 1, 33]
 * Pass 1 = [18, (runPermutationsForTheRest)]
 * 
 */

const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];

// const permutations = array => {
//     const permutationsArray = [];

//     /**
//      * Where,
//      * "arr", is the array to be recursed upon
//      * "indx" is the index of the original array
//      * "count" is the number of iterations of recursion to be done on the array.
//      */
//     const recurse = (arr, indx, firstEl) => {
//         if(indx === array.length) return permutationsArray;
//         // if(count === 0) {
//         //     swap(array, indx, indx + 1);
//         //     return recurse(array, indx + 1, array.length - 1);
//         // }
        
//         const rest = arr.slice(0, indx).concat(arr.slice(indx + 1));

//         for(let i = 0; i < rest.length; i++) {
//             let j = 0;
//             while(j < rest.length - 1) {
//                 swap(rest, j, j + 1);
//                 permutationsArray.push([firstEl, ...rest]);
//                 j++;
//             }
//         }

//         return recurse(array.slice(0), indx + 1, arr[indx + 1]);
//     }

//     return recurse(array.slice(0), 0,  array[0]);
// }

const permutations = n => {
    const numsArray = Array.isArray(n) ? n : [...n.toString()];
    const combinations = [];
    const swap = (swapArray, indxA, indxB) => {
        const temp = swapArray[indxA];
        swapArray[indxA] = swapArray[indxB];
        swapArray[indxB] = temp;
    }

    const generate = (length, array) => {
        if(length === 1) return combinations.push([...array]);
        
        generate(length - 1, array);

        for(let i = 0; i < length - 1; i++) {
            length % 2 === 0 ? swap(array, i, length-1) : swap(array, 0, length-1);
            generate(length - 1, array);
        }
    };

    generate(numsArray.length, [...numsArray]);

    return combinations;
}

const arr1 = [18, 73, 55, 59, 37, 13, 1, 33]; // factorial: 40320

const arr2 = [18, 73, 55, 59, 37]

/*
[ 18, 73, 55, 59 ]
[ 18, 73, 59, 55 ]
[ 18, 55, 73, 59 ]
[ 18, 55, 59, 73 ]
[ 18, 59, 55, 73 ]
[ 18, 59, 73, 55 ]
*/

/*
[ 18, 55, 73, 59, 37 ]
[ 18, 55, 73, 37, 59 ] *
[ 18, 55, 59, 73, 37 ]
[ 18, 55, 59, 37, 73 ]
[ 18, 55, 37, 59, 73 ] *
[ 18, 55, 37, 73, 59 ] *

[ 18, 59, 55, 37, 73 ]
[ 18, 59, 37, 55, 73 ]
[ 18, 59, 37, 73, 55 ]
[ 18, 37, 59, 73, 55 ]
[ 18, 37, 73, 59, 55 ]
[ 18, 37, 73, 55, 59 ]
[ 18, 73, 37, 55, 59 ]
[ 18, 73, 55, 37, 59 ]
[ 18, 73, 55, 59, 37 ]
*/


console.log(permutations(arr2));