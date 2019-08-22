// 给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。

// 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。

// 你可以假设除了整数 0 之外，这个整数不会以零开头。

/**
 * 加一
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  const len = digits.length - 1;
  if (digits[len] + 1 < 10) {
    digits[len] += 1;
    return digits;
  }

  let idx = 0;

  for (let i = len; i >= 0; --i) {
    if (digits[i] + 1 === 10) {
      digits[i] = 0;
      idx = 1;
    } else {
      digits[i] += idx;
      break;
    }
  }

  if (digits[0] === 0) {
    digits.unshift(1);
  }

  return digits;
};

console.log(plusOne([2, 9, 2, 9]));
