//给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。

// 例如，给出 n = 3，生成结果为：

// [
//   "((()))",
//   "(()())",
//   "(())()",
//   "()(())",
//   "()()()"
// ]


/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  if (n === 1) return ['()']
  let arr = []

  function loop(left = 0, right = 0, tmp = '', n) {
    if (left === n && right === n) {
      arr.push(tmp)
      return
    }

    if (left < n) {
      loop(left + 1, right, tmp + '(', n)
    }

    if (left > right && right < n) {
      loop(left, right + 1, tmp + ")", n)
    }
  }

  loop(0, 0, '', n)
  return arr
}

console.log(generateParenthesis(3))
