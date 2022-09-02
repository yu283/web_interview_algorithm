const ping = (arr) => {
  let tar = 0
  let ca = 0
  for (let i = 1; i < arr.length; i++) {
    let count = Math.abs(arr[i-1] - arr[i])
    if (count > ca) {
      ca = count
      tar = i
    }
  }
  if (tar > 1) {
    arr[tar - 1] = (arr[tar -2] + arr[tar])/2
  }else {
    arr[tar - 1] = arr[tar]
  }
  let res = 0
  for (let i = 1; i < arr.length; i++) {
    let count = Math.abs(arr[i-1] - arr[i])
    if (count > res) {
      res = count
      tar = i
    }
  }
  return res
}


console.log(ping([1,3,4]))
