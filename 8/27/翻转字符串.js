const revers = (s) => {
  let chars = ['A','H','I','M','O','T','U','V','W','X','Y']

  const length = s.length
  for (let i = 0; i < length; i++) {
    if (chars.indexOf(s[i])===-1){
      return 'NO'
    }
  }
  for (let x = 0,y = length-1;x<y;x++,y--){
    if (s[x]!==s[y]){
      return 'NO'
    }
  }

  return 'YES'
}

console.log(revers('ABA'))
console.log(revers('AHA'))
console.log(revers('AQA'))
/*console.log(revers('HHA'))
console.log(revers('ABBA'))
console.log(revers('AHHA'))
console.log(revers('AHHHA'))*/


