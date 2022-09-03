function isValid( s ) {
  if (s.length === 0){
    return true
  }
  if (s.length % 2=== 1){
    return false
  }
  // write code here
  let minCount = 0
  let midCount = 0
  let maxCount = 0
  let n = s.length
  for (let i = 0; i < n; i++) {
    if (s[i]==='('){
      minCount++
    }
    if (s[i]==='['){
      midCount++
    }
    if (s[i]==='{'){
      maxCount++
    }
    if (s[i]===')'){
      if (minCount>0) {
        minCount--
      }else {
        return false
      }
    }
    if (s[i]===']'){
      if (midCount>0) {
        midCount--
      }else {
        return false
      }
    }
    if (s[i]==='}'){
      if (maxCount>0) {
        maxCount--
      }else {
        return false
      }
    }
  }
  return minCount + midCount + maxCount === 0;

}
