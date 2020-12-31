/**
 * 插入排序
 * 它的工作原理是通过构建有序序列，对于未排序数据，
 * 在已排序序列中从后向前扫描，找到相应位置并插入。
 * @param {number[]} arr
 */
function insertion(arr) {
  let j, cur
  for (let i = 1; i < arr.length; i++) {
    j = i - 1
    cur = arr[i]
    while (j >= 0 && cur < arr[j]) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = cur

  }
  return arr
}

insertion([5, 3, 4, 10, 7, 1, 6, 2])
