/**
 * @param {string} s
 * @param {number[]} shifts
 * @return {string}
 */
const shiftingLetters = function (s, shifts) {
  let arr = []
  arr[0] = shifts.reduce((a,b) => {
      return a+b
  })
  for (let i = 1; i < shifts.length; i++) {
    arr.push(arr[i-1]-shifts[i-1])
  }
  let res = []
  for (let i = 0; i < s.length; i++) {
    let charCode = (((s[i].charCodeAt() - 97) + arr[i]) % 26) + 97
    res[i] = String.fromCharCode(charCode)
  }
  return res.join('')
};

console.log(shiftingLetters('abc',[3,5,9]))

