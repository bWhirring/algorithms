// 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。
// 注意：答案中不可以包含重复的三元组。

/**
 * 三数之和
 * @param {*} nums
 */
var threeSum = function (nums) {
  let set = new Set()
  const len = nums.length

  nums = nums.sort((a, b) => a - b)

  for (let i = 0; i < len; i++) {
    let l = i + 1
    let r = len - 1

    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r]
      if (sum === 0) {
        set.add([nums[i], nums[l], nums[r]].toString())
        l++
        r--
      } else if (sum > 0) {
        r--
      } else {

        l++
      }
    }
  }
  return [...set].map(v => v.split(',').map(n => Number(n)))
}

threeSum([-1, 0, 1, 2, -1, -4])
