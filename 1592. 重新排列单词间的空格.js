/**
 * @param {string} text
 * @return {string}
 */
const reorderSpaces = function (text) {
  let arr = text.split('')
  let words = []
  let space = 0
  let word = ''
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]!==' '){
      word+=arr[i]
    }else {
      if (word!==''){
        words.push(word)
      }
      space++
      word = ''
    }
    if (i===arr.length-1&&word!==''){
      words.push(word)
    }
  }
  let res = words[0]
  if (words.length===1){
    for (let i = 0; i < space; i++) {
      res+=' '
    }
  }
  let count = Math.floor(space/(words.length-1))
  for (let i = 1; i < words.length; i++) {
    for (let j = 0; j < count; j++) {
      res+=' '
    }
    res+=words[i]
  }
  let tail = space%(words.length-1)
  if (tail!==0){
    for (let i = 0; i < tail; i++) {
      res+=' '
    }
  }
  return res
};

console.log(reorderSpaces(" practice   makes   perfect"))

