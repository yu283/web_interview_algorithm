/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i],i)
  }
  if (map.has(target)) return map.get(target)
  else return -1
};
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search2 = (nums,target) => {
  let index = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i]>nums[index]) index = i
  }
  if (target < nums[0])
    return binary_search(nums,index+1,nums.length,target)
  else
    return binary_search(nums,0,index+1,target)
}

const binary_search = (nums,left,right,target) => {
    while (left<right) {
      let mid = parseInt(left + (right-left)/2)
      if (nums[mid]===target) return mid
      else if (nums[mid]>target) right = mid
      else if (nums[mid]<target) left = mid + 1
    }
    return nums[right] === target? right:-1
}
