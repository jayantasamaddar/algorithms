const sumNested = arr => {
  return arr
    .toString()
    .split(',')
    .reduce((acc, n) => acc + (parseInt(n) || 0), 0);
};

console.log(sumNested([[1], []]));
