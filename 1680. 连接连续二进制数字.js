/**
 * @param {number} n
 * @return {number}
 */
const concatenatedBinary = function (n) {
  let res = String()
  for (let i = 0; i < n + 1; i++) {
    //数字转化为二进制
    res+=i.toString(2)
    //二进制转化为数字
    let key = parseInt(res,2)
    if (key>=1e9+7){
      key%=1e9+7
      res = key.toString(2)
    }
  }
  return parseInt(res,2)
};


console.log(concatenatedBinary(100000000))
