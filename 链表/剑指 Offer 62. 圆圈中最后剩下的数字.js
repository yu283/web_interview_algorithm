/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
/*const lastRemaining = function (n, m) {
//  n就是数组的长度
  let arr = [],
    i = 0
  //转化为类数组
  while (i < n) {
    arr.push(i)
    i++
  }
  let index = (m - 1) % n
  while (n > 1) {
    arr.splice(index,1)
    n-=1
    index = (index + m - 1)%n
  }
  return arr[0]

};*/

const lastRemaining = function (n, m) {
  const fn = (n, m) => {
    if (n === 1) {
      return 0
    }
    let x = fn(n-1,m)
    return (m + x) % n
  }
  return fn(n ,m)
};

