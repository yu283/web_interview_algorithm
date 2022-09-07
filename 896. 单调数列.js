/**
 * @param {number[]} nums
 * @return {boolean}
 */
const isMonotonic = function (nums) {
  let inc = true
  let dec = true
  for (let i = 1; i < nums.length; i++) {
    if (nums[i-1]<=nums[i]){
      dec = false
    }else if (nums[i-1]>=nums[i]){
      inc = false
    }
  }
  return inc||dec
};
