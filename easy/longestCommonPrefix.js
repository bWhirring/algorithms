// 编写一个函数来查找字符串数组中的最长公共前缀。 如果不存在公共前缀，返回空字符串 ""。

var longestCommonPrefix = function(strs) {
  if (!strs || strs.length === 0) return '';

  if (strs.length === 1) return strs[0];

  return strs.reduce((x, y) => {
    let str = '';
    for (let l = x.length; l >= 0; --l) {
      str = x.substring(0, l);
      if (y.startsWith(str)) return str;
    }
  });
};

const nums = ['daog'];

console.log(longestCommonPrefix(nums));
