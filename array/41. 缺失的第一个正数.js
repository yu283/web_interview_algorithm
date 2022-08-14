//41. 缺失的第一个正数.js
/*给你一个未排序的整数数组 nums ，请你找出其中没有出现的最小的正整数。
请你实现时间复杂度为 O(n) 并且只使用常数级别额外空间的解决方案。*/

/**
 * @param {number[]} nums
 * @return {number}
 */
//时间复杂度不符合要求
/*const firstMissingPositive = function (nums) {
  // 抽取数组中的整数，减少遍历的次数
  nums = nums.filter(item => {
    return item > 0;
  })
  //中转变量
  let min;
  //遍历，相当于数组的排序，使得数组按照升序排列
  for (let i = 0; i < nums.length; i++) {
    min = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (min > nums[j]) {
        let temp = min;
        min = nums[j];
        nums[j] = temp;
      }
    }
    // 当把后面的值都遍历完后，当前值和标记出来的值交换位置
    nums[i] = min;
    if (i > 0) {
      //如果其中差值大于1，则为nums[i - 1] + 1缺少
      if (nums[i] - nums[i - 1] > 1) {
        return nums[i - 1] + 1;
      }
    } else { //如果nums[0]不为1，那么就是1缺少了
      if (min !== 1) {
        return 1;
      }
    }
  }
  // 如果数组是连续的正整数,注意：此处不能用数组长度直接+1，因为会有相同元素的数组情况，如[1,1]
  //pop返回数组的最后一个数字来加一返回，为第一个缺失的正整数
  return nums.length ? nums.pop() + 1 : 1;
};*/

const firstMissingPositive = function(nums) {
  for (const num of nums)
    if (typeof nums[+num - 1] !== 'undefined')
      nums[+num - 1] = '' + nums[+num - 1]
  for (let i = 0; i < nums.length; i++)
    if (typeof nums[i] === 'number')
      return i + 1
  return nums.length + 1
};

