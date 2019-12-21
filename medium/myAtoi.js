/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
  let a = parseInt(str)
  if (Number.isNaN(a)) {
    return 0
  } else if (a >= 2 ** 31 - 1) {
    return 2 ** 31 - 1
  } else if (-(2 ** 31) >= a) {
    return -(2 ** 31)
  }
  return a
}

console.log(myAtoi("-91283472332"))
