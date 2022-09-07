const fn =(arr1, arr2)=> {
  let map = new Map()
  let arr = []
  let res = []
  for (let i = 0; i < arr1.length; i++) {
    map.set(i+1,arr1[i])
    arr.push(arr1[i])
  }
  for (let i = 0; i < arr2.length; i++) {
    let temp = map.get(arr2[i])
    if (arr.indexOf(temp+1)===-1){
      if (temp<2019) {
        map.set(arr2[i],temp+1)
        arr[arr2[i]-1] = temp+1
      }else {
        map.set(arr2[i],temp)
      }
    }
  }
  for (let i = 0; i < arr1.length; i++) {
    res.push(map.get(i+1))
  }
  return res
}

// console.log(fn([2,3,6],[1,3]))
const fn2 = str => {
  let arr = str.split(' ')
  return arr.map(item => {
    return parseInt(item)
  })
}

console.log(fn2('2 4 5'))
