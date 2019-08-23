// 二进制求和

// 给定两个二进制字符串，返回他们的和（用二进制表示）。

// 输入为非空字符串且只包含数字 1 和 0。

// 示例 1:

// 输入: a = "11", b = "1"
// 输出: "100"
// 示例 2:

// 输入: a = "1010", b = "1011"
// 输出: "10101"

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let init = 0;
  let arr = [];
  let La = a.length - 1;
  let Lb = b.length - 1;
  while (La >= 0 || Lb >= 0) {
    init += La >= 0 ? a.charAt(La--) * 1 : 0;
    init += Lb >= 0 ? b.charAt(Lb--) * 1 : 0;
    arr.push(init % 2);
    init = init >= 2 ? 1 : 0;
  }
  if (init === 1) arr.push(1);
  return arr.reverse().join('');
};

console.log(addBinary('1010', '1011'));
