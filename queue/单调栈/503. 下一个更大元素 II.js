/**
 * @param {number[]} nums
 * @return {number[]}
 */
/*
* 测试用例:[1,2,1,1,2,1]
* [1,2,1]
	测试结果:[2,-1,-1]
	期望结果:[2,-1,2]
* */
const nextGreaterElements = function (nums) {
  let length = nums.length
  const counts = [...nums,...nums]
  const stack = []
  const keys = new Array(length).fill(0)
  for (let i = 0; i < counts.length; i++) {
    let temp = counts[i]
    while (stack.length&&temp>counts[stack[stack.length - 1]]) {
      let key = stack.pop()
      keys[key] = i
    }
    stack.push(i)
  }
  return keys.splice(0,length).map((item) => {
      if (item === 0) {
        return -1
      } else {
        return counts[item]
      }
  })
};

/**
 * 官方解法
 * var nextGreaterElements = function(nums) {
 *     const n = nums.length;
 *     const ret = new Array(n).fill(-1);
 *     const stk = [];
 *     for (let i = 0; i < n * 2 - 1; i++) {
 *         while (stk.length && nums[stk[stk.length - 1]] < nums[i % n]) {
 *             ret[stk[stk.length - 1]] = nums[i % n];
 *             stk.pop();
 *         }
 *         stk.push(i % n);
 *     }
 *     return ret;
 * };
 *
 */
