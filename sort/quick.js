/**
 * 快速排序 (O(nlongn))
 * (1） 在数据集之中， 选择一个元素作为 "基准"（ pivot）。
 * (2） 所有小于 "基准"的元素， 都移到 "基准"的左边； 所有大于 "基准"的元素， 都移到 "基准"的右边。
 * (3） 对 "基准" 左边和右边的两个子集， 不断重复第一步和第二步， 直到所有子集只剩下一个元素为止。
 * @param {number[]} arr
 * @returns
 */
function quickSort(arr) {
  if (arr.length <= 1) return arr

  let leftArr = []
  let rightArr = []

  let pivotIndex = Math.floor(arr.length / 2)
  let pivot = arr.splice(pivotIndex, 1)[0]


  for (let i = 0; i < arr.length; i++) {
    arr[i] > pivot ? rightArr.push(arr[i]) : leftArr.push(arr[i])
  }

  return quickSort(leftArr).concat(pivot).concat(quickSort(rightArr))


}

console.log(quickSort([5, 3, 4, 10, 7, 1, 6, 2]))
