/*
function transform(s) {
  if (s.length!==4&&s.length!==7){
    return s
  }
  let arr = s.split('')
  let res = 'rgb('
  if (arr.length === 4) {
    for (let i = 1; i < arr.length; i++) {
      if (0<arr[i]&&arr[i]<10) {
        console.log(arr[i])
        res=res + arr[i]*arr[i]
      }else if (96<arr[i].charCodeAt()<103){
        res = res + ((arr[i].charCodeAt()-86) * (arr[i].charCodeAt()-86) - 1)
      }else {
        return s
      }
      if (i<3){
        res = res + ', '
      }else {
        res = res +')'
      }
    }
  }
  return res
}
*/

/*

function transform(s) {
  let reg = //
}
*/


