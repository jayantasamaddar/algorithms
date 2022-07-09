/** Hash Table */

const hash = (string, max) => {
  let hash = 0;
  for (let i = 0; i < string.length; i++) {
    hash += string.charCode(i);
  }
  return hash % max;
};
