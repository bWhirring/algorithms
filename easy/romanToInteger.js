// 示例 1:

// 输入: "III"
// 输出: 3
// 示例 2:

// 输入: "IV"
// 输出: 4
// 示例 3:

// 输入: "IX"
// 输出: 9
// 示例 4:

// 输入: "LVIII"
// 输出: 58
// 解释: L = 50, V= 5, III = 3.
// 示例 5:

// 输入: "MCMXCIV"
// 输出: 1994
// 解释: M = 1000, CM = 900, XC = 90, IV = 4.

const Roman = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
  A: 4,
  B: 9,
  E: 40,
  F: 90,
  G: 400,
  H: 900,
};

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  s = s.replace(/IV/g, 'A');
  s = s.replace(/IX/g, 'B');
  s = s.replace(/XL/g, 'E');
  s = s.replace(/XC/g, 'F');
  s = s.replace(/CD/g, 'G');
  s = s.replace(/CM/g, 'H');
  return s.split('').reduce((num, v) => {
    const n = Roman[v];
    return num + n;
  }, 0);
};

console.log(romanToInt('MCMXCIV'));
