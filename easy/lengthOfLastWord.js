//给定一个仅包含大小写字母和空格 ' ' 的字符串，返回其最后一个单词的长度。

// 如果不存在最后一个单词，请返回 0 。

// 说明：一个单词是指由字母组成，但不包含任何空格的字符串。

/**
 * 最后一个单词的长度
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  s = s.trim()
  if (s.length === 0) return 0
  const last = s
    .split(' ')
    .filter(v => !!v)
    .pop()
  return last.length
}

console.log(lengthOfLastWord('  a '))
