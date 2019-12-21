/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  const arr1 = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  const arr2 = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
  let idx = 0
  let ret = ""
  while (num > 0) {
    let int = num / arr1[idx]
    while (--int >= 0) {
      ret += arr2[idx]
    }
    num %= arr1[idx]
    idx++
  }
  return ret
}

console.log(intToRoman(111))
