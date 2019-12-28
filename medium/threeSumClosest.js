/**
 * 最接近的三树之和
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  const len = nums.length
  if (len === 3) return nums.reduce((a, b) => a + b)
  nums = nums.sort((a, b) => a - b)
  let sum = nums[0] + nums[1] + nums[2]

  for (let i = 0; i < len; i++) {
    let l = i + 1
    let r = len - 1
    while (l < r) {
      const current = nums[i] + nums[l] + nums[r]
      if (Math.abs(current - target) < Math.abs(sum - target)) {
        sum = current
      }
      if (current > target) {
        r--
      } else if (current < target) {
        l++
      } else {
        return current
      }
    }
  }
  return sum
}
