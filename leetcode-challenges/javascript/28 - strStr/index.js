var strStr = function (haystack, needle) {
  if (!needle) return 0;
  if (needle.length > haystack.length) return -1;
  let index = -1;
  let subStr = '';

  for (let i = 0; i < haystack.length; i++) {
    if (subStr === needle) return index;

    if (haystack[i] === needle[subStr.length]) {
      console.log({
        haystackEl: haystack[i],
        needle: needle[subStr.length],
        i,
      });
      subStr += haystack[i];
      if (subStr.length === 0) index = i;
    } else {
      index = -1;
      subStr = subStr.charAt(subStr.length - 1);
    }
  }

  return index;
};

console.log(strStr('mississippi', 'issip'));
