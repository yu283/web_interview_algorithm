function test(s) {
  let max = 0
  let mid = 0
  let min = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i]==='{'){
      max++
    } else if (s[i]==='['){
      mid++
    } else if (s[i]==='('){
      min++
    } else if (s[i]===')'){
      if (min) min--
      else return false
    } else if (s[i]===']'){
      if (mid) mid--
      else return false
    } else if (s[i]==='}'){
      if (max) max--
      else return false
    }
  }
  return !(max !== 0 || max !== 0 || max !== 0);

}
