// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，
// 并返回他们的数组下标。 nums = [2, 7, 11, 15], target = 9 返回 [0, 1]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const len = nums.length;
  for (let i = 0; i < len - 1; i++) {
    const j = target - nums[i];
    if (nums.indexOf(j, i + 1) !== -1) {
      const idx = nums.indexOf(j, i + 1);
      return [i, idx];
    }
  }
};

console.log(twoSum([3, 0, 3, 0], 6));
