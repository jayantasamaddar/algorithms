const countPositivesSumNegatives = array => {
  if (!array?.length) return [];
  firstEl = array.filter(num => num > 0).length;
  secondEl = array.filter(num => num < 0).reduce((acc, num) => acc + num, 0);
  return [firstEl, secondEl];
};

console.log(
  countPositivesSumNegatives([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
  ])
);
