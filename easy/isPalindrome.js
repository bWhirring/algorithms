// 判断字符串是否是回文结构

// console.log(isPalindrome("level")) ;  // true
// console.log(isPalindrome("levels")); // false
// console.log(isPalindrome("A car, a man, a maraca"); // true

function isPalindrome(str) {
  str = str.replace(/\W/g, '').toLowerCase()
  return str.split('').reverse().join('') === str
}

console.log(isPalindrome('A car, a man , a maraca'));
