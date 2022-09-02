const toZheng = (num) => {
  if (num%2==0) return parseInt(num)
  if (num.length < 2) return -1
  let tag = false
  num = Array.from(num)
  for (let i = 0; i < num.length; i++) {
    if (num[i]%2==0) {
      let temp = num[i]
      num[i] = num[num.length - 1]
      num[num.length - 1] = temp
      tag = true
    }
  }
  let res = parseInt(num.join(''))
  if (tag) return res
  else return -1
}

console.log(toZheng('111'))
console.log(toZheng('121'))
console.log(toZheng('110'))
console.log(toZheng('141'))
console.log(toZheng('411'))
/*
let x = 'abcdefg'
x = Array.from(x)
x[1] = 'd'
console.log(x[1])
console.log(x.join(''))
*/
