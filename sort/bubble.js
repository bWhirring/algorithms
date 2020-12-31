/**
 * 冒泡排序
 * 两两比较，然后交换顺序
 * @param {number[]} arr
 */
function bubble(arr) {
  let { length } = arr
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }

  return arr
}

bubble([5, 3, 4, 10, 7, 1, 6, 2])
