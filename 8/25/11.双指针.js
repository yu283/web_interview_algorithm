/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function (height) {
  let left = 0
  let right = height.length -1
  let res = 0
  while (left < right) {
    res = height[left] <= height[right] ?
      Math.max(res, (right - left) * height[left++]):
      Math.max(res, (right - left) * height[right--]);
  }
  return res
};

console.log([4,3,1,56,34].sort((a,b) => {
    return b - a
}))
