/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  const ret = new Set()
  nums = nums.sort((a, b) => a - b)
  const len = nums.length

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      let l = j + 1
      let r = len - 1
      while (l < r) {
        const sum = nums[i] + nums[j] + nums[l] + nums[r]
        if (sum === target) {
          ret.add([nums[i], nums[j], nums[l], nums[r]].toString())
          l++
          r--
        } else if (sum > target) {
          r--
        } else {
          l++
        }

      }
    }
  }
  return [...ret].map(v => v.split(',').map(n => Number(n)))
}


fourSum([1, 0, -1, 0, -2, 2], 0)
