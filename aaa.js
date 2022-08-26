const funA = (function(){
  let res =  1
  return function() {
    return res *= 2
  }
  })()

console.log(funA())
console.log(funA())
console.log(funA())
console.log(funA())
console.log(funA())
const func =  (function() {
  let res = 1
  return function(){
    for(let n =1;n<=5;n++){
      res *= 2
    }
    return res
  }
})()
console.log(func())
console.log(func())
console.log(func())
console.log(func())
