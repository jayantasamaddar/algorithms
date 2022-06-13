/* Method 1 - Heap's Algorithm - https://en.wikipedia.org/wiki/Heap%27s_algorithm */
// Step 1 - create a Swap function to swap two digits
// Step 2 - Run do-while loop for < array length - 1. Create a `counter--` to close the while loop
// Step 3 - compare last digit with second last Digit's index.
// Step 4 - if last digit Bigger, swap.

const nextBigger = n => {
    const nums = [...n.toString()];
    const swap = (arr, a, b) => {
        const temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    }
    const combinations = [n];
    const splicedArr = [...nums];
    let counter = splicedArr.length - 1;
    do {
        const lastDigit = parseInt(splicedArr[counter]);
        const secondLastDigit = parseInt(splicedArr[counter-1]);
        if(lastDigit > secondLastDigit) {
            swap(splicedArr, counter, counter-1);
            combinations.push(parseInt(splicedArr.join("")));
        }
        counter--;
    } while (counter > 0)

    const iterations= combinations.sort((a,b)=> a-b);
    return iterations[iterations.indexOf(n) + 1] || -1;
}


/* Testing */

/* Truthy */
console.log(nextBigger(12))   // returns 21
console.log(nextBigger(74191553))   // mine: 74195153 // Heaps: 74193155 // codewars: 74131559
console.log(nextBigger(513))  // returns 531
console.log(nextBigger(144)) // returns 414
console.log(nextBigger(2017)) // returns 2071
console.log(nextBigger(1234567980)) // returns 1234569780
//1234567980 = 1234568970 => Given: 1234567908
// 8138566826421 = 8138566826421 => Given: 8138566826124

/* Falsy */
console.log(nextBigger(9)) // returns -1
console.log(nextBigger(111)) // returns -1
console.log(nextBigger(531)) // returns -1