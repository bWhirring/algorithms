// 搜索插入位置

// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

// 可以假设数组中无重复元素。

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  if (target === 0) return 0;
  let len = nums.length;
  if (nums[len - 1] < target) return len;

  let left = 0;
  while (left < len) {
    const mid = Math.floor((left + len) / 2);
    console.log(mid, 'mid');
    if (nums[mid] < target) {
      left += 1;
    } else {
      len = mid;
    }
  }
  return left;
};

console.log(searchInsert([1, 3, 4, 5, 6, 8], 7));
