/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param priceNums int整型一维数组 配件价格列表
 * @param budget int整型 最大预算
 * @return int整型
 */
function accessoryPlan( priceNums ,  budget ) {
  // write code here
  let length = priceNums.length
  let res = 0
  for (let i = 0; i < length - 1; i++) {
    for (let j = i + 1; j < length; j++) {
      if (priceNums[i]+priceNums[j]<=budget){
        res++
      }
    }
  }
  return res
}
/*
module.exports = {
  accessoryPlan : accessoryPlan
};*/

