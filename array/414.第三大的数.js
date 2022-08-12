//给你一个非空数组，返回此数组中 第三大的数 。如果不存在，则返回数组中最大的数。
/**
 * @param {number[]} nums
 * @return {number}
 */
const thirdMax = function(nums) {
  let a = -Infinity
  let b = -Infinity
  let c = -Infinity
  for (let num of nums) {
    if (num > a) {
      c = b;
      b = a;
      a = num;
    } else if (a> num && num>b) {
      c = b
      b = num
    } else if (b > num && num > c) {
      c = num;
    }
  }
  return c===-Infinity? a : c
};

