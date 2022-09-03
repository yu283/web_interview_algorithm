function isValid( s ) {
  if (s.length === 0){
    return true
  }
  if (s.length % 2=== 1){
    return false
  }
  // write code here
  let stack = []
  let n = s.length
  for (let i = 0; i < n; i++) {
    if (s[i]==='('){
      stack.push(s[i])
    }
    if (s[i]==='['){
      stack.push(s[i])
    }
    if (s[i]==='{'){
      stack.push(s[i])
    }
    if (s[i]===')'){
      let temp = stack.pop()
      if (temp !== '(') return false
    }
    if (s[i]===']'){
      let temp = stack.pop()
      if (temp !== '[') return false
    }
    if (s[i]==='}'){
      let temp = stack.pop()
      if (temp !== '{') return false
    }
  }
  return stack.length === 0;
}
