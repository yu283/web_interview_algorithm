/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = function (s) {
  let arr = new Array(52).fill(0)
  for (let i = 0; i < s.length; i++) {
    if (s[i].charCodeAt() > 96){
      arr[(s[i].charCodeAt()-97)]++
    }
    if (s[i].charCodeAt()<91) {
      arr[(s[i].charCodeAt()-39)]++
    }
  }
  let res = 0
  let max = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]%2===0){
      res+=arr[i]
    }else {
      max = max>=arr[i]?max:arr[i]
    }
  }
  return res + max
};


console.log('a'.charCodeAt())
console.log('A'.charCodeAt()-39)
console.log('Z'.charCodeAt())
console.log('Z'.charCodeAt()-39)

