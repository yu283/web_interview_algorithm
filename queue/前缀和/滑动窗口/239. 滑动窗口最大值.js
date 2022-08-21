/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
/*const maxSlidingWindow = function (nums, k) {
  let stack = []
  if (nums.length <= k) {
    return [nums.reduce((a,b)=> a>b?a:b)]
  }
  let start = 0
  let end = k -1
  let isFirst = true
  while (end < nums.length) {
    let arr = []
    if (isFirst) {
      test(start,end,arr,stack,nums)
    } else {
      if (nums[end] > stack[start]) {
        stack.push(nums[end])
      } else if (nums[start-1]===stack[start]) {
        test(start,end,arr,stack,nums)
      }
    }

    start++
    end++
    arr = []
  }
  return stack
};


function test(start,end,arr,stack,nums) {
  for (let i =start; i<=end; i++) {
    arr.push(nums[i])
  }
  let res = arr.reduce((a,b) => a>b?a:b)
  stack.push(res)
}*/


const maxSlidingWindow = function (nums, k) {

  const deque = [];
  const res = [];
  for (let i = 0; i < nums.length; i++) {

    while (deque[0] < i - k + 1) {
      deque.shift();
    }

    while (nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop();
    }

    deque.push(i);

    if (i >= k - 1) {
      res.push(nums[deque[0]]);
    }
  }
  return res;
};
/**
 * 双端队列
 * 定义一个队列 windows，存放数组中的索引
 * 当前索引值大于窗口长度减一，且队列中第一个索引值小于等于当前索引值减窗口长度，则将队头出队
 * 每次入队，比较队中已有索引对于元素是否小于当前索引对应元素，是则队尾出队该元素
 * 如果已经达到窗口长度，则把当前队列第一个索引值对应元素添加到结果集中
 * 重复这个过程
 */

/*const maxSlidingWindow1 = function (nums, k) {
  if (!nums.length) return []

  let ans = [],
    windows = []

  for (let i = 0; i < nums.length; i++) {
    if (i >= k && windows[0] <= i - k) windows.shift()
    while (windows.length && nums[windows[windows.length - 1]] <= nums[i]) windows.pop()
    windows.push(i)
    if (i >= k - 1) ans.push(nums[windows[0]])
  }

  return ans
};*/


const maxSlidingWindow3 = function(nums, k) {
  const n = nums.length;
  const q = [];
  for (let i = 0; i < k; i++) {
    while (q.length && nums[i] >= nums[q[q.length - 1]]) {
      q.pop();
    }
    q.push(i);
  }

  const res = [nums[q[0]]];
  for (let i = k; i < n; i++) {
    while (q.length && nums[i] >= nums[q[q.length - 1]]) {
      q.pop();
    }
    q.push(i);
    while (q[0] <= i - k) {
      q.shift();
    }
    res.push(nums[q[0]]);
  }
  return res;
};


let nums =[1,3,-1,-3,5,3,6,7]
let k = 3
console.log(maxSlidingWindow(nums,k))
