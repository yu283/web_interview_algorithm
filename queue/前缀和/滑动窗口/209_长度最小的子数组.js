/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
const minSubArrayLen = function (target, nums) {
  let n = nums.length
  if (n===0) {
    return 0
  }
  let res = Infinity
  let start = 0,end = 0
  let sum = 0
  while (end < n) {
    sum += nums[end]
    while (sum>=target) {
      res = Math.min(res,end - start + 1)
      sum -= nums[start]
      start++
    }
    end++
  }
  return res === Infinity ? 0 : res
};
