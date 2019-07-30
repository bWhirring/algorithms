/**
 * 二分查找法(O(logn))
 * @param {Array} arr 查找的字符串
 * @param {*} num 查找的数字
 * @returns
 */
function binary(arr, num) {
  let high = arr.length;
  let low = 0;

  while (low <= high) {
    const mid = Math.floor((high + low) / 2);
    const guess = arr[mid];

    if (guess === num) {
      return mid;
    } else if (guess > num) {
      high = mid - 1;
    } else if (guess < num) {
      low = mid + 1;
    } else {
      return null;
    }
  }
}
