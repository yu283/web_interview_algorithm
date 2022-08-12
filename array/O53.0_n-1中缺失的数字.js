/*一个长度为n-1的递增排序数组中的所有数字都是唯一的，并且每个数字都在范围0～n-1之内。在范围0～n-1内的n个数字中有且只有一个数字不在该数组中，请找出这个数字。
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function (nums) {
  if (nums[nums.length - 1] === nums.length - 1) {
    return nums.length;
  }
  let start = 0, end = nums.length - 1, mid;
  while (start <= end) {
    mid = start + Math.floor((end - start) / 2);
    if (nums[mid] === mid) {//说明小于mid的是不缺少的
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return start; //start已经大于end了
};
