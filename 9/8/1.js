const findNum = (arr) => {
  let a = []
  let b = []
  for (let i = 0; i < arr.length; i++) {
    if (isNaN(Number(arr[i].value))){
      b.push(arr[i].value)
    }else {
      a.push(arr[i].value)
    }
  }
  return {
    a,
    b
  }
}

