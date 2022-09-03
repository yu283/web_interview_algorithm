function numFormat(s) {
  s = s + ''
  let arr = s.split('.')
  let s1 = arr[0]
  const strArr = s1.split('')
  let count = strArr.length % 3
  let resArr = []
  for (let i = 0; i < strArr.length; i++) {
    resArr.push(strArr[i])
    if ((i+1)%3===count){
      resArr.push(',')
    }
  }
  resArr.pop()
  if (arr[1]) {
    return  resArr.join('')+'.' + arr[1]
  }else {
    return  resArr.join('')
  }
}
