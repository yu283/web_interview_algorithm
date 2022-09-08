/**
 * @param {number[]} nums
 * @return {number}
 */
const movesToMakeZigzag = function (nums) {
  let res1 = 0
  let res2 = 0
  let arr = [...nums]
  let flag = nums[0]
  for (let i = 1; i < nums.length; i++) {
    if (i%2===0){
      if (nums[i]>=nums[i-1]) {
        res1+=(nums[i]-nums[i-1]+1)
        nums[i] = nums[i] - (nums[i]-nums[i-1]+1)
      }
      if (nums[i]>=nums[i+1]) {
        res1+=(nums[i]-nums[i+1]+1)
        nums[i] =nums[i] -  (nums[i]-nums[i+1]+1)
      }
    }
  }
  if (flag >= nums[1]) {
    res1+=(flag-nums[1]+1)
  }
  for (let i = 1; i < arr.length; i++) {
    if (i%2!==0){
      if (arr[i]>=arr[i-1]) {
        res2+=(arr[i]-arr[i-1]+1)
        arr[i] = arr[i] - (arr[i]-arr[i-1]+1)
      }
      if (arr[i]>=arr[i+1]) {
        res2+=(arr[i]-arr[i+1]+1)
        arr[i] = arr[i] - (arr[i]-arr[i+1]+1)
      }
    }
  }
  return Math.min(res1,res2)

};

console.log(movesToMakeZigzag([6,6,1,3,7,8]))
