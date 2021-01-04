
var counter = []
/**
 * 基数排序
 * 基数排序是按照低位先排序，然后收集；再按照高位排序，然后再收集；依次类推，直到最高位。有时候有些属性是有优先级顺序的，先按低优先级排序，再按高优先级排序。
 * 最后的次序就是高优先级高的在前，高优先级相同的低优先级高的在前。
 * @param {*} arr
 * @param {*} maxDigit
 * @returns
 */
function radixSort(arr, maxDigit) {
  var mod = 10
  var dev = 1
  for (var i = 0; i < maxDigit; i++, dev *= 10, mod *= 10) {
    for (var j = 0; j < arr.length; j++) {
      var bucket = parseInt((arr[j] % mod) / dev)
      if (counter[bucket] == null) {
        counter[bucket] = []
      }
      counter[bucket].push(arr[j])
    }

    arr = counter.flat()
    for (let i = 0; i < counter.length; i++) {
      counter[i] = []
    }
  }
  return arr
}

console.log(radixSort([5, 3, 4, 10, 11, 12, 7, 1, 1, 6, 2], 2))
