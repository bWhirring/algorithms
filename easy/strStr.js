//给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  -1。

// 当 needle 是空字符串时我们应当返回 0

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (needle === '') return 0;
  const len = needle.length;
  let idx = -1;
  for (let i = 0; i < haystack.length; i++) {
    if (
      haystack[i] === needle[0] &&
      haystack.substring(i, i + len) === needle
    ) {
      return i;
    }
  }
  return idx;
};

console.log(strStr('aabbaa', 'bb'));
