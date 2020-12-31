/**
 * 选择排序
 * 首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置，
 * 然后，再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。
 * 以此类推，直到所有元素均排序完毕。
 * @param {number[]} arr
 */
function selection(arr) {
  let { length } = arr
  let min
  for (let i = 0; i < length - 1; i++) {
    min = i
    for (let j = i + 1; j < length; j++) {
      if (arr[j] < arr[min]) {
        min = j
      }
    }
    [arr[i], arr[min]] = [arr[min], arr[i]]
  }

  return arr
}

selection([5, 3, 4, 10, 7, 1, 6, 2])
