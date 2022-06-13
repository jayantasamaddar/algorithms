const mix = (s1, s2) => {

    const lowerCaseFilter = str => [...str].filter(c => c === c.toLowerCase() && c!== " " && !c.match(/\W/g));
    const sortObjectByValue = ((a,b) => {
        const bV = Object.values(b)[0];
        const aV = Object.values(a)[0];
        return aV.length < bV.length ? 1 : -1; // Do not touch, working as expected
    });

    // Odd-even issue

    const sortObjectByKey = ((a,b) => {
        const bK = Object.keys(b)[0];
        const aK = Object.keys(a)[0];
        if(!!aK && !!bK) {
           return parseInt(aK) % 2 == 0 ? (a > b ? 1 : -1) : -1
        } 
        else return 1;
        //return aK%2 === 0 && bK%2 === 1 ? -1 : 1;
    });

    

    

    

    Array.prototype.sortNumericKey = function() {
        return this.filter(e => Object.keys(e)[0] !== "=").sort((a,b) => sortObjectByKey(a,b)).concat(this.filter(e => Object.keys(e)[0] === "="));
    }

    // New Approach

    /* 
    Get sizes
    */

    Array.prototype.filterSort = function() {
        const arr = this.sort((a,b) => sortObjectByValue(b,a));
        const sizes = [...new Set(arr.map(e => Object.values(e)[0].length).join(""))];
        let counter = sizes.reduce((acc, b) => Math.max(acc,b),-Infinity);
        const keys = [...new Set(arr.map(e => Object.keys(e)[0]).join(""))];
        const orderKeys = keys.includes("=") ? keys.sort((a,b) => a-b).concat(keys.splice(keys.indexOf("="),1)) : keys;
        const box = [];

        for(let i = 2; i <= counter; i++) {
            //Sort them according to key order now
            const sizeLevel = [...arr].filter(e => Object.values(e)[0].length === i).sort((a,b) => a-b);
            console.log(sizeLevel);

            
        }
        //console.log(box);
        
        
        const orderedArray = [];
        const count = keys.length;
        sizes.forEach((size, i) => {
            const array = arr.filter(e => Object.values(e)[0].length === parseInt(size));
            const arrPass = array.sort((a,b) => sortObjectByValue(b,a)).sort((a,b) => sortObjectByKey(a,b));
            const arrPass2 = arrPass.filter(e => Object.keys(e)[0] != "=").concat(arrPass.filter(e => Object.keys(e)[0] === "="));
            orderedArray.push(arrPass2);
        });
        
        const finalPass = [];
        const sortedPass = [...orderedArray].map(e => e.sort((a,b) => sortObjectByValue(b,a)).sortNumericKey());
        // console.log(sortedPass);
        sortedPass.forEach(e => e.forEach(x => finalPass.push(x)));
        //console.log(finalPass);
        const yy = [...finalPass];

        // /* Last Filter */
        // const filterX = (arr, currIndx) => {
        //     yy.forEach((e, i) => {
        //         const eKey = Object.keys(e)[0];
        //         if(i === 0) {
        //             if(eKey === "=") {
        //                 swap(yy, i, (i+1));
        //                 filterX(yy, i);
        //             }
        //         }
        //         if(i > 0) {      
        //             const f = yy[i-1];
                    
        //             const fKey = Object.keys(f)[0];
        //             const swapReady = fKey!== "=" && [e[eKey][0], f[fKey][0]].sort()[0] === e[eKey][0];
        //             // if((parseInt(eKey) < parseInt(fKey)) && e[eKey].length === f[fKey].length) {
        //             //     swap(yy, i, (i-1));
        //             //     filterX(yy, i);
        //             // }
        //             if(swapReady) swap(yy, i, i-1);
        //             if((parseInt(eKey) < parseInt(fKey))  && e[eKey].length === f[fKey].length) {
        //                 swap(yy, i, (i-1));
        //                 filterX(yy, i);
        //             }
        //         }
        //     });
        // }
        // filterX(yy, 0);
        return yy;
    }

    const arrayMap = arr => {
        return [...new Set(arr)].map((x, i) => {
            return {[x] : arr.filter(c => x === c).join("")};
        }).filter(c => c[Object.keys(c)[0]].length > 1);
    }

    const finalMapArray = (s1, s2) => {
        s1ArrObj = arrayMap(lowerCaseFilter(s1));
        s2ArrObj = arrayMap(lowerCaseFilter(s2));

        const arr1Obj = [...s1ArrObj];
        const arr2Obj = [...s2ArrObj];

        const finalArr = [];

        finalArr.push(...arr1Obj.map((arr1, i )=> {
            const key = Object.keys(arr1)[0];
            const arr2 = arr2Obj.find(x => Object.keys(x)[0] === key);
            if(!arr2) return {1:arr1[key]}
            if(arr1[key].length > arr2[key].length) {
                arr2Obj.splice(arr2Obj.indexOf(arr2), 1);
                return {1:arr1[key]};
            }
            if(arr1[key].length === arr2[key].length) {//problematic
                arr2Obj.splice(arr2Obj.indexOf(arr2), 1);
                return {"=":arr1[key]};
            } else {
                return {1:null};
            }
        }).filter(e => Object.values(e)[0]));

        if(arr2Obj.length) {
            finalArr.push(...arr2Obj.map(e => {
                return { 2 : e[Object.keys(e)[0]] }
            }));
        }
        return finalArr.filterSort();
    }

    /* Single Reducer function */
    const reducer = (s1, s2) => finalMapArray(s1, s2).map(e => `/${Object.keys(e)[0]}:${Object.values(e)[0]}`).join("").replace("/","");

    return reducer(s1, s2)
}

console.log(mix("looping is fun but dangerous", "less dangerous than coding")); // "1:ooo/1:uuu/2:sss/=:nnn/1:ii/2:aa/2:dd/2:ee/=:gg"
// console.log(mix("Are they here", "yes, they are here")); // "2:eeeee/2:yy/=:hh/=:rr"
//console.log(mix(" In many languages", " there's a pair of functions")); // "1:aaa/1:nnn/1:gg/2:ee/2:ff/2:ii/2:oo/2:rr/2:ss/2:tt"
// console.log(mix("A aaaa bb c", "& aaa bbb c d")); // "1:aaaa/2:bbb"
// console.log(mix("Lords of the Fallen", "gamekult")); // "1:ee/1:ll/1:oo"
// console.log(mix("A generation must confront the looming ", "codewarrs"));