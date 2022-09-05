/**
 * @param {number} n
 * @return {number}
 */
const numWays = function (n) {
  if (n === 0) return 0
  if (n<3) return n
  let res = 0
  let n1 = 1
  let n2 = 2
  for (let i = 0; i < n-2; i++) {
    res = n1 + n2
    console.log(res)
    n1 = n2
    n2 = res%(1e9+7)
  }
  return res%(1e9+7)
};


console.log(numWays(3))
