/**
 * 计数排序不是基于比较的排序算法，
 * @param {number[]} arr
 */
function counting(arr) {
  let max = Math.max(...arr)
  let newArr = new Array(max + 1)

  for (let i = 0; i < arr.length; i++) {
    if (newArr[arr[i]]) {
      newArr[arr[i]] += 1
    } else {
      newArr[arr[i]] = 1
    }
  }

  let idx = 0

  for (let i = 0; i < newArr.length; i++) {
    while (newArr[i] > 0) {
      arr[idx++] = i
      newArr[i]--
    }
  }

  console.log(arr)
}

counting([5, 3, 4, 10, 7, 1, 6, 2, 2])
