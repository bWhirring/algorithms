/**
 * 选择排序(O(n * n))
 * @param {*} arr
 * @returns
 */
function selectionSort(arr) {
  let newArr = [];
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    let min = arr[i]

    for (let j = i + 1; j < len; j++) {
      if (min > arr[j]) {
        [arr[j], min] = [min, arr[j]]
      }
    }

    newArr.push(min)
  }
  return newArr
}

selectionSort([5, 3, 6, 2, 10])
