// 报数序列是一个整数序列，按照其中的整数的顺序进行报数，得到下一个数。其前五项如下：

// 1.     1
// 2.     11
// 3.     21
// 4.     1211
// 5.     111221
// 1 被读作  "one 1"  ("一个一") , 即 11。
// 11 被读作 "two 1s" ("两个一"）, 即 21。
// 21 被读作 "one 2",  "one 1" （"一个二" ,  "一个一") , 即 1211。

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  if (n === 1) return '1';

  const str = countAndSay(n - 1);
  let res = '';
  let count = 0;
  let tmp = str[0];
  for (let i = 0; i < str.length; i++) {
    if (tmp === str[i]) {
      count++;
    } else {
      res += count + tmp;
      tmp = str[i];
      count = 1;
    }
    if (i === str.length - 1) res += count + tmp;
  }
  return res;
};

console.log(countAndSay(5));
