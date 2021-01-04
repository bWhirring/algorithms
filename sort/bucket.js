/**
 * 桶排序
 * @param {number[]} arr
 */
function bucketSort(arr) {
  let min = Math.min(...arr)
  let max = Math.max(...arr)

  let bucketSize = 3
  let buckerCount = Math.floor((max - min) / bucketSize) + 1

  let newArr = []
  for (let i = 0; i < buckerCount; i++) {
    newArr[i] = []
  }

  for (let i = 0; i < arr.length; i++) {
    newArr[Math.floor((arr[i] - min) / bucketSize)].push(arr[i])
  }

  for (let i = 0; i < newArr.length; i++) {
    // 在这里对每个桶进行排序

  }
}

bucketSort([5, 3, 4, 10, 7, 1, 6, 2])
