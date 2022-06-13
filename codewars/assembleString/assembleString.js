const assembleString = array => {
      return array.length && [...array[0]].map((c,i) => {
        if(c === "*") return array.every(x => x[i] === c) ? "#" : array.find(z => z[i] !== c)[i];
        return c;
    }).join("") || "";
}

/* Testing */

console.log(assembleString(["a*cde","*bcde","abc*e"])); // "abcde"
console.log(assembleString(["H*llo, W*rld!", "Hel*o, *or*d!", "*ello* World*"])); // "Hello, World!"
console.log(assembleString(["*#*#*#*#*#*#*#*", "*#*#*#*#*#*#*#*", "*#*#*#*#*#*#*#*", "*#*#*#*#*#*#*#*"])); // "###############"