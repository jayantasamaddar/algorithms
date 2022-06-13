const squareDigits = num => parseInt([...num.toString()].map(n => Math.pow(parseInt(n), 2)).join(""));

console.log(squareDigits(9119));