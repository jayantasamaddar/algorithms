// Helper function: Determine type of input
const type = input =>
  Array.isArray(input)
    ? 'array'
    : typeof input === 'object'
    ? 'object'
    : typeof input === 'function'
    ? 'function'
    : 'primitive';

// Recursively deep copies objects and arrays.
function deepCopy(input) {
  if (type(input) === 'primitive') return input;
  else if (type(input) === 'array') {
    return input.map(e => deepCopy(e));
  } else if (type(input) === 'object') {
    const entries = Object.entries(input);
    const result = {};
    for (let i = 0; i < entries.length; i++) {
      const [key, value] = entries[i];
      result[key] = deepCopy(value);
    }
    return result;
  } else {
    // Doesn't deep copy functions
  }
}

/** Testing */

const a = {
  en: 'Bye',
  de: 'Tschüss',
  arrayTest: [25, 26, { 1: 'one', 2: 'two ' }],
  lol: {
    many: 'laughs',
    help: {
      tutorial: 'Learn JavaScript',
      endgame: true,
      tutorialName: function () {
        return this.tutorial;
      },
    },
  },
};

const b = [
  1,
  2,
  3,
  4,
  [25, 26],
  {
    many: 'laughs',
    help: 'me',
    test: 'another',
  },
];

const newA = deepCopy(a);
const newB = deepCopy(b);

console.log(JSON.stringify(newA));
// Result: {"en":"Bye","de":"Tschüss","arrayTest":[25,26,{"1":"one","2":"two "}],"lol":{"many":"laughs","help":{"tutorial":"Learn JavaScript","endgame":true}}}

console.log(JSON.stringify(newB));
// Result: [1,2,3,4,[25,26],{"many":"laughs","help":"me","test":"another"}]
