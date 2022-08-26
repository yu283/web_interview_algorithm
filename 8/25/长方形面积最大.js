function needArea(arr) {
  if (arr.length === 0 || arr.length===1) return 0
  let res = []
  for (let i = 0; i < arr.length; i++) {
    res.push(i * arr[i])
  }
  console.log(res)
  return res.reduce((a,b) => {
    return a>b?a:b
  })
}

function maxNum(arr) {
  return arr.reduce((a,b) => {
      return a>b?a:b
  })
}

console.log(needArea([4,1,2,7]))
/*console.log(maxNum([1, 2, 1, 2, 3, 4, 3, 2, 6]));
console.log(maxNum([1, 2, 1, 10, 3, 4, 3, 2, 6]));
console.log(maxNum([1, 2, 1, 2, 3, 42, 3, 2, 6]));
console.log(maxNum([1, 2, 1, 2, 3, 4, 3, 2, 63]));*/
