/**
 * 给定 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水
 *
 */


/**
 * @param {number[]} height
 * @return {number}
 */
// var maxArea = function (height) {
//   let max = 0
//   for (let i = 0; i < height.length - 1; i++) {
//     for (let j = 1; j < height.length; j++) {
//       const min = Math.min(height[i], height[j])
//       const area = min * (j - i)
//       if (area > max) max = area
//     }
//   }
//   return max
// }

var maxArea = function (height) {
  let max = 0
  let l = 0
  let r = height.length - 1
  while (l < r) {
    if (height[l] < height[r]) {
      max = Math.max(max, (r - l) * height[l])
      l++
    } else {
      max = Math.max(max, (r - l) * height[r])
      r--
    }
  }
  return max
}

maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])
