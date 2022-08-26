/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function (s, t) {
  if (s.length !== t.length) return false
  let arr = new Array(26).fill(0)
//  a 97
  for (const char of s) {
    arr[char.charCodeAt() - 97]++
  }
  for (const char of t) {
    arr[char.charCodeAt() - 97]--
  }
  for (const el of arr) {
    if (el!==0){
      return false
    }
  }
  return true
};
