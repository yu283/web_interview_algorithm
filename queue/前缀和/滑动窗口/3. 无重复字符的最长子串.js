/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
  if (s.length<=1) return s.length
  let maxLength = 1
  let temp = s[0]
  for (let i = 1; i < s.length; i++) {
    const index = temp.indexOf(s[i])
    if (index >= 0) {
      // 如果发现现有的temp中包含s[i]，更新最大长度。
      maxLength = Math.max(maxLength, temp.length)
      // 将窗口滑动到重复的子串，继续遍历
      // 示例： abcabc
      // abc
      // 遇到了a
      // 将bc留下
      // 再补上s[i](a)
      // bca 继续遍历
      temp = temp.substring(index + 1)
      temp += s[i]
    } else {
      temp += s[i]
    }
  }
  maxLength = Math.max(maxLength, temp.length)
  return maxLength

};

