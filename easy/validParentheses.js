// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。

/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function(s) {
  const len = s.length;
  if (s === '') return true;
  if (len % 2 !== 0) return false;

  while (s.length) {
    let tmp = s;
    s = s.replace(/\(\)/g, '');
    s = s.replace(/\[\]/g, '');
    s = s.replace(/\{\}/g, '');
    if (tmp === s) return false;
  }

  return true;
};

console.log(isValid('((()(())))'));
