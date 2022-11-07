/** Helper function: Determine type of input */
const type = input =>
  Array.isArray(input)
    ? 'array'
    : typeof input === 'object'
    ? 'object'
    : typeof input === 'function'
    ? 'function'
    : 'primitive';

/** Recursively deep copies objects and arrays */
function deepCopy(input) {
  if (type(input) === 'primitive') return input;
  else if (type(input) === 'array') {
    return input.map(e => deepCopy(e));
  } else if (type(input) === 'object') {
    const entries = Object.entries(input);
    const result = {};
    for (let i = 0; i < entries.length; i++) {
      const [key, value] = entries[i];
      if (type(value) === 'function') {
        // Keeps original function as reference and binds result to `this`
        result[key] = input[key].bind(result);
      } else result[key] = deepCopy(value);
    }
    return result;
  }
}

/************************************************************/
/** Testing */
/************************************************************/
const a = {
  en: 'Bye',
  de: 'Tschüss',
  arrayTest: [25, 26, { 1: 'one', 2: 'two ' }],
  lol: {
    many: 'laughs',
    help: {
      tutorial: 'Learn JavaScript',
      endgame: true,
      tutorialName: function (name) {
        return `${name}, you have task remaining: ${this.tutorial}!`;
      },
    },
  },
};

const newA = deepCopy(a);

console.log(newA.lol.help.tutorialName('John')); // 'John, you have task remaining: Learn JavaScript!'
newA.lol.help.tutorial = 'Learn Python'; // Changes: 'Learn JavaScript' to 'Learn Python'

console.log(newA.lol.help.tutorialName('Terry')); // 'Terry, you have task remaining: Learn Python!'

console.log(newA);
/**
 * Prints the following object
 * -----------------------------
{
  en: 'Bye',
  de: 'Tschüss',
  arrayTest: [ 25, 26, { '1': 'one', '2': 'two ' } ],
  lol: {
    many: 'laughs',
    help: {
      tutorial: 'Learn Python',
      endgame: true,
      tutorialName: [Function: bound tutorialName]
    }
  }
}
 */
