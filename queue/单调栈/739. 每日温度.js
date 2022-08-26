/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
/*
* 输入: temperatures = [73,74,75,71,69,72,76,73]
  输出: [1,1,4,2,1,1,0,0]
* */
const dailyTemperatures = function (temperatures) {
  let length = temperatures.length
  const stack = []
  const res = new Array(length).fill(0)
  for (let i = 0; i < length; i++) {
    let temp = temperatures[i]
    while (stack.length&&temp>temperatures[stack[stack.length - 1]]) {
      let key = stack.pop()
      res[key] = i - key
    }
    stack.push(i)
  }
  return res
};
