const findMost = (arr) => {
  if (arr.length===0) return
  if (arr.length===1) return arr[0]
  let res = new Map()
  for (let i = 0; i < arr.length; i++) {
    if (res.get(arr[i])){
      res.set(arr[i],res.get(arr[i])+1)
    }else {
      res.set(arr[i],1)
    }
  }
  return res.get(1)

}


