function flippingMatrix(matrix) {
    const arr = [];
    const n = matrix.length / 2;

    const generate = (arr) => {
        const columns = []
        for(let k = 0; k < arr.length; k++) {
            const column = [];
            for(let l = 0; l < arr.length; l++) {
                column[column.length] = arr[l][k];
            }
            columns[columns.length] = column;
        }
        return columns;
    }

    const columns = generate(matrix);

    // const generateRows = (arr) => {
    //     const rows = [];
    //     for(let i = 0; i < arr.length; i++) {
    //         const row = [];
    //         for(let j = 0; j < arr.length; j++) {
    //             row[row.length] = arr[j][i]
    //         }
    //         rows[rows.length] = row;
    //     }
    //     return rows;
    // }

    // return generateRows(columns);

    const reverseColumn = (columns, i) => {
        const newColumns = [...columns.slice(0, i), columns[i].reverse(), ...columns.slice(i + 1)];
        return generate(newColumns);
    }

    return reverseColumn(columns, 2);



    // for(let i = 0; i < matrix.length; i++) {
    //     const column = [];
    //     for(let j = 0; j < matrix.length; j++) {
    //         // adjust column
    //         column[column.length] = arr[j][i];
    //         const sumFirstHalfColumn = column.slice(0, n).reduce((acc, a) => acc + a, 0);
    //         const sumSecondHalfColumn = column.slice(n).reduce((acc, a) => acc + a, 0);
    //         if(sumFirstHalfColumn < sumSecondHalfColumn) column.reverse();
            

    //         // adjust row
    //         const sumFirstHalfRow = matrix[i].slice(0, n).reduce((acc, a) => acc + a, 0);
    //         const sumSecondHalfRow = matrix[i].slice(n).reduce((acc, a) => acc + a, 0);
    //         if(sumFirstHalfRow < sumSecondHalfRow) matrix[i].reverse();
    //     }         
    // }
    // console.log(matrix)

}

const arr = [
    [112, 42, 83, 119], 
    [56, 125, 56, 49], 
    [15, 78, 101, 43], 
    [62, 98, 114, 108]
];


console.log(flippingMatrix(arr));