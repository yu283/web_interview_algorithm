/**
 * @param {number[][]} mat
 * @return {number}
 */
const numSpecial = function (mat) {
  let n = mat.length
  let res = 0
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j]===1) {
        let res1 = xZero(mat[i],j)
        let res2 = yZero(mat,j,i)
        if (res1&&res2) res++
      }
    }
  }
  return res
};

const xZero = (arr,point) => {
  let res = true
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]!==0&&i!==point){
      res = false
    }
  }
  return res
}


const yZero = (arr,key,point) => {
  let res = true
  for (let i=0;i<arr.length;i++){
    if (arr[i][key]!==0&&i!==point){
      res = false
    }
  }
  return res
}
