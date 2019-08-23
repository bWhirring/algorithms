// x的平方根

// 实现 int sqrt(int x) 函数。

// 计算并返回 x 的平方根，其中 x 是非负整数。

// 由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let right = Math.floor(x / 2) + 1;
  let left = 0;
  while (left < right) {
    let mid = Math.ceil((left + right) / 2);

    let sqrt = mid * mid;
    if (sqrt > x) {
      right = mid - 1;
    } else {
      left = mid;
    }
  }
  return left;
};

console.log(mySqrt(16));
