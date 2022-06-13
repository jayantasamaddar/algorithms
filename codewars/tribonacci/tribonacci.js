/* Tribonacci */
/************************************************************************/
/* Solution 1*/
/************************************************************************/
const tribonacci = (signature,n) => {
    if(n==0) return [];
    else if(n < 3) return signature.slice(0,n);
    else if(signature.length < 3) return signature;
    for(let i = 0; i < (n-3); i++) {
        signature.push(signature[i] + signature[i+1] + signature[i+2]);
    }
    return signature;
}
/************************************************************************/
/* Solution 2*/
/************************************************************************/
const tribonacci2 = (signature,n) => {
    for(let i = 0; i < (n-3); i++) {
        signature.push(signature[i] + signature[i+1] + signature[i+2]);
    }
    return signature.slice(0,n);
}
console.log(tribonacci([12,5,9],10));
console.log(tribonacci2([12,5,9],10));