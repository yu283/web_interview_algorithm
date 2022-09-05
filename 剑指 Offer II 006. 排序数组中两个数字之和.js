/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (numbers, target) {
  let res = []
  let left = 0
  let right = numbers.length - 1
  while (left<right) {
    let total = numbers[left] + numbers[right]
    if (total < target) {
      left++
    }
    if (total > target) {
      right--
    }
    if (total === target) {
      res[0] = left
      res[1] = right
      break
    }
  }
  return res
};
