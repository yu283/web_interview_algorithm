/**
 * @param {string} s
 * @return {number[][]}
 */
const largeGroupPositions = function (s) {
  const res = []
  let num = 1
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== s[i + 1]) {
      if (num >= 3) res.push([i - num + 1, i])
      num = 1
    } else num++
  }
  return res
};

