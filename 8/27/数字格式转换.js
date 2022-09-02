function test(s) {
  const strArr = s.split('')
  let count = strArr.length % 3
  let resArr = []
  for (let i = 0; i < strArr.length; i++) {
    resArr.push(strArr[i])
    if ((i+1)%3===count){
      resArr.push(',')
    }
  }
  resArr.pop()
  return resArr.join('')
}

console.log(test('12341'))
console.log(test('12221341'))
console.log(test('132132341'))
console.log(test('1241231341'))

