/**
 * 快速排序 (O(nlongn))
 * (1） 在数据集之中， 选择一个元素作为 "基准"（ pivot）。
 * (2） 所有小于 "基准"的元素， 都移到 "基准"的左边； 所有大于 "基准"的元素， 都移到 "基准"的右边。
 * (3） 对 "基准" 左边和右边的两个子集， 不断重复第一步和第二步， 直到所有子集只剩下一个元素为止。
 * @param {*} arr
 * @returns
 */
function quickSort(arr) {
  if (arr.length <= 1) return arr;

  const pivot = arr.pop();

  const len = arr.length;

  const leftArr = [];
  const rightArr = [];

  for (let i = 0; i < len; i++) {
    arr[i] > pivot ? rightArr.push(arr[i]) : leftArr.push(arr[i]);
  }

  return quickSort(leftArr).concat([pivot], quickSort(rightArr));
}

const array = [3, 5, 2, 4, 1]

const res = quickSort(array);
console.log(res)
