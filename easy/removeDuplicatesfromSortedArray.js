// 删除排序数组中的重复项

//给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。

// 不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。
// 原地: https://baike.baidu.com/item/%E5%8E%9F%E5%9C%B0%E7%AE%97%E6%B3%95
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length <= 1) return nums;

  let tmp = nums[0];
  for (let i = 1; i < nums.length; i++) {
    while (tmp === nums[i]) {
      nums.splice(i, 1);
    }
    tmp = nums[i];
  }
  return nums.length;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
