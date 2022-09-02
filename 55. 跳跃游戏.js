/**
 * @param {number[]} nums
 * @return {boolean}
 */
/*const canJump = function (nums) {
  let can = nums[0]
  let k = 0
  while (can < nums.length && k < nums.length) {
    for (let i = 0; i <= can; i++) {
      if (can < nums[i] + i) {
        can=nums[i]+i
      }
    }
    k++
  }
  return can >= nums.length - 1

};*/
const canJump = function (nums) {
  let can = nums[0]
  while (can < nums.length -1) {
    for (let i = 0; i < nums.length - 1; i++) {
      if (can < nums[i]+i) {
        can = nums[i] + i
      }
      if (nums[i]===0 && can<=i) {
        return false
      }
    }
  }
  return true
};

