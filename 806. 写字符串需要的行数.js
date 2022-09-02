/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
const numberOfLines = function (widths, s) {
  let line = 0
  let num = 0
  for (let i = 0; i < s.length; i++) {
    num+=widths[s[i].charCodeAt()-97]
    if (num>100) {
      line+=1
      num = widths[s[i].charCodeAt()-97]
    }
  }
  return [line+1,num]
};
