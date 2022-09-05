const taozi = (arr,k) => {
  let tempArr = arr.map(item=>{
    return parseInt(item)
  })
  let resArr = []
  let flag = true
  while (flag) {
    flag = false
    let average =  (tempArr.reduce((a,b) => {
        return  a+b
    }))/tempArr.length
    let key = []
    for (let i = 0; i < tempArr.length; i++) {
      if (tempArr[i]<average*2) {
        key.push(tempArr[i])
      }else {
        flag = true
      }
    }
    if (key.length > 0) resArr = key
    tempArr = resArr
  }
  return resArr.length
}
let arr = ['3','10','5','4','2']
console.log(taozi(arr,'2'))
console.log('a b'.split(' '))
let newArr = arr.map(item => {
  return parseInt(item,10)
})
console.log(newArr)
