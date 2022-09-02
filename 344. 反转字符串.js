/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = function (s) {
  for (let left=0,right=s.length-1; left < right; left++,right--) {
    let temp = s[left]
    s[left] = s[right]
    s[right] = temp
  }
};
