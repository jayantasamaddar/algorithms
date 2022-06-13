/**
 * There are two -element arrays of integers, A and B. 
 * Permute them into some A' and B' such that the relation A'[i] + B'[i] >= l holds 
 * for all i where 0 <= i < n.
 * 
 * There will be q queries consisting of A, B, and C. 
 * For each query, return YES if some permutation A', B' satisfying the relation exists. 
 * Otherwise, return NO.
 * 
 * 
 */

function twoArrays(k, A, B) {
    const size = A.length === B.length ? A.length : undefined;
    if(!size) return;

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

    const permutationsA = permutations(A);
    const permutationsB = permutations(B)

    // const uniquePermutationsA = Array.from(new Set(permutationsA));
    // const uniquePermutationsB = Array.from(new Set(permutationsB));

    for(let l = 0; l < permutationsA.length; l++) {
        let isTrue = true;
        for (let m = 0; m < permutationsA.length; m++) {
            for(let n = 0; n < permutationsA[l].length; n++) {
                if(permutationsA[l][n] + permutationsB[m][n] < k) isTrue = false;
            }
            if(isTrue) return "YES";
            else if(!isTrue && l === permutationsA.length - 1) return "NO";
        }  
    }
}

arr1 = [2, 1, 3]; // [[2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1], [1, 2, 3], [1, 3, 2]]
arr2 = [7, 8, 9];
arr3 = [1, 2, 2, 1];
arr4 = [3, 3, 3, 4];
arr5 = [20, 1];
arr6 = [1, 1];

arr7 = [18, 73, 55, 59, 37, 13, 1, 33];
arr8 = [81, 11, 77, 49, 65, 26, 29, 49]

// [
//     [ 2, 1, 3 ],
//     [ 2, 3, 1 ],
//     [ 3, 2, 1 ],
//     [ 3, 1, 2 ],
//     [ 1, 3, 2 ],
//     [ 1, 2, 3 ]
// ]

// console.log(twoArrays(10, arr1, arr2));
// console.log(twoArrays(5, arr3, arr4));
// console.log(twoArrays(4, arr5, arr6));
console.log(twoArrays(91, arr7, arr8));