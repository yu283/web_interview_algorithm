const fn1 = (str) => {
  let minC = 0
  let midC = 0
  let bigC = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '('){
      minC++
    }
    if (str[i] === '['){
      midC++
    }
    if (str[i] === '{'){
      bigC++
    }
    if (str[i]===')'){
      if (minC) {
        minC--
      }else {
        console.log('(',i)
      }
    }
  }
}
