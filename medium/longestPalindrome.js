// 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

// 示例 1：

// 输入: "babad"
// 输出: "bab"
// 注意: "aba" 也是一个有效答案。
// 示例 2：

// 输入: "cbbd"
// 输出: "bb"

/**
 * @param {string} s
 * @return {string}
 */
// var longestPalindrome = function (s) {
//   if (s.length === 1) return s
//   let max = 0
//   let ret = ''
//   for (let i = 0; i < s.length; i++) {
//     for (let j = s.length; j > 0; j--) {
//       if (s[i] === s[j - 1]) {
//         const str = s.substring(i, j)
//         if (str === str.split('').reverse().join('')) {
//           if (str.length > max) {
//             ret = str
//             max = str.length
//           }
//         }
//       }
//     }
//   }
//   return ret
// }


var longestPalindrome = function (s) {
  let max = 0
  let start = 0
  const len = s.length

  const centerExpand = (left, right) => {
    while (left >= 0 && right < len && s[left] === s[right]) {
      left--
      right++
    }
    return right - left - 1
  }

  for (let i = 0; i < len; i++) {
    const len1 = centerExpand(i, i)
    const len2 = centerExpand(i, i + 1)
    const maxLen = Math.max(len1, len2)
    if (maxLen > max) {
      max = maxLen
      start = i - ((maxLen - 1) >> 1)
    }
  }
  console.log(max, start)
  return s.substring(start, max + start)
}

console.log(longestPalindrome('abba'))
