/**
 * ou will be given a list of 32 bit unsigned integers. 
 * Flip all the bits (1 --> 0 and 0 --> 1) and return the result as an unsigned integer.
 * 
 * Example
 * -------
 * 
 * Input
 * ------
 * 'n' = 9:
 * 
 * Working
 * -------
 * 9 ---> 000000000000000000000000000000000000000000001001 (in 32 bits)
 * Flipped ---> 111111111111111111111111111111111111111111110110 (in 32 bits)
 * 111111111111111111111111111111111111111111110110 ---> 4294967286
 * 
 * Result
 * ------
 * 
 * 
 */

function flippingBits(n) {
    const bin32Bit = n.toString(2).padStart(32,0);
    let flippedBin = '';
    for (let i = 0; i < bin32Bit.length; i++) {
        flippedBin += bin32Bit[i] === "0" ? "1" : "0"
    }
    return parseInt(flippedBin, 2)
}

console.log(flippingBits(9));