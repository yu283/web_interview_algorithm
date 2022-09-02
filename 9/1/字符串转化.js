const fn1 = (A,B) => {
  let lenA = A.length
  let lenB = B.length
  let arr = new Array(lenB+1).fill(new Array(lenA+1))
  arr[0][0] = 0
  for (let i = 0; i < lenA; i++) {
    arr[0][i] = i
  }
  for (let i = 0; i < lenB; i++) {
    arr[i][0] = i
  }
  for (let i = 0; i < lenB; i++) {
    for (let j = 0; j < lenA; j++) {
      arr[i][j] = Math.min(Math.min(arr[i-1][j]+1,arr[i][j-1]+1),(A[j-1]===B[j-1]?arr[i-1][j-1]:arr[i-1][j-1]+1))
    }
  }
  return arr[lenB][lenA]
}

