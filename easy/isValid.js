// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 注意空字符串可被认为是有效字符串。

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s === '') return true

  while (s.length) {
    s = s.replace(/\(\)/g, '')
    s = s.replace(/\{\}/g, '')
    s = s.replace(/\[\]/g, '')
    if (s === '') return true
  }
  return false
}

console.log(isValid('[()]'))
