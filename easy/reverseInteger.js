// 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
/**
 *
 示例 1: 输入: 123 输出: 321
 示例 2: 输入: -123 输出: -321
 示例 3: 输入: 120 输出: 21
 */
1534236469;
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let num = `${x}`;
  let len = num.length;
  while (num[len - 1] === '0') {
    num = num.slice(0, len - 1);
    len = num.length;
  }
  num = `${Math.abs(num)}`
    .split('')
    .reverse()
    .join('');

  num = x < 0 ? 0 - num : +num;
  if (num > Math.pow(2, 31) - 1 || num < -Math.pow(2, 31)) {
    return 0;
  } else {
    return num;
  }
};

console.log(reverse(1534236469));
