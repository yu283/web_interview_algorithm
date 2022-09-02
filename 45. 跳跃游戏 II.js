/**
 * @param {number[]} nums
 * @return {number}
 */
const jump = function (nums) {
  let current = nums.length - 1
  let res = 0
  while (current!==0) {
    for (let i = 0; i < current; i++) {
      if (i + nums[i] >= current) {
        current = i
        res+=1
        break
      }
    }
  }
  return res
};
