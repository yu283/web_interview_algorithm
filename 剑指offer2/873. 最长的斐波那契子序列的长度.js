/**
 * @param {number[]} arr
 * @return {number}
 */
/*const lenLongestFibSubseq = function (arr) {
  const indices = new Map();
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    indices.set(arr[i], i);
  }
  const dp = new Array(n).fill(0).map(() => new Array(n).fill(0));
  let ans = 0;
  for (let i = 0; i < n; i++) {
    for (let j = n - 1; j >= 0; j--) {
      if (arr[j] * 2 <= arr[i]) {
        break;
      }
      if (indices.has(arr[i] - arr[j])) {
        const k = indices.get(arr[i] - arr[j]);
        dp[j][i] = Math.max(dp[k][j] + 1, 3);
        ans = Math.max(ans, dp[j][i]);
      }
    }
  }
  return ans;
};*/

/**
 * @param {number[]} arr
 * @return {number}
 */
const lenLongestFibSubseq = function (arr) {
  let res = 0
  let n = arr.length
  for (let i = 0; i < n - 2; i++) {
    for (let j = i; j < n - 1; j++) {
      let a = arr[i],b = arr[j],len = 2
      for (let k = j + 1; k < n; k++) {
        let c = arr[k]
        if (a + b === c) {
          a = b
          b = c
          res = Math.max(res,++len)
        } else if (a + b < c) {
          break
        }
      }
    }
  }
 return res
};
