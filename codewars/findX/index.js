/**

Jack's teacher gave him a ton of equations for homework. The thing is they are all kind of same so they are boring.

So help him by making a equation solving function that will return the value of x.

Test Cases will be like this:

# INPUT            # RETURN
'x + 1 = 9 - 2'    # 6
'- 10 = x'         # -10
'x - 2 + 3 = 2'    # 1
'- x = - 1'        # 1
All test cases are valid.
Every +, - and numbers will be separated by space.
There will be only one x either on the left or right.
x can have a - mark before it.
returned object will be a integer.npm i -g npm@8.9.0

*/

const operations = s => {
  const op = [];
  if (s.includes('+')) {
    op.push(...s.split('+').filter(v => v !== ''));
    console.log(op);
    return op.reduce((acc, e) => {
      if (e.includes('-')) {
        const subArr = e.split('-').filter(v => v !== '');
        return subArr.reduce((acc, n) => -parseInt(n) - acc, 0);
      }
      return acc + parseInt(e);
    }, 0);
    // return op.reduce((acc, n) => acc + parseInt(n), 0);
  } else {
    op.push(...s.split('-').filter(v => v !== ''));
    return -op.reduce((acc, n) => acc + parseInt(n), 0);
  }
};

const valueOfX = eq => {
  const trimmed = eq.split(' ').join('');
  let [lhs, rhs] = trimmed.split('=');

  let x = '';
  let result = 0;
  if (lhs.includes('x')) {
    x = lhs.slice(0, lhs.indexOf('x') + 1);
    lhs = lhs.slice(lhs.indexOf('x') + 1);
    result = operations(rhs) - operations(lhs);
  } else {
    x = rhs.slice(0, rhs.indexOf('x') + 1);
    rhs = rhs.slice(rhs.indexOf('x') + 1);
    result = operations(lhs) - operations(rhs);
  }

  return x[0] === '-' ? -result : result;
};

console.log(valueOfX('x - 2 + 3 = 2'));
console.log(valueOfX('x + 1 = 9 - 2'));
console.log(valueOfX('- x = - 1'));
console.log(valueOfX('- 10 = x'));
console.log(valueOfX('x = - 8 - 7'));

// console.log(['-2', '3'].reduce((acc, n) => acc + parseInt(n), 0));
