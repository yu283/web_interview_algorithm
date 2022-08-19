//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} num
 * @return {boolean}
 */
const isSameAfterReversals = function(num) {
  if(num === 0) return true
  return num.toString().split('')[num.toString().length - 1] === '0' ? false : true
};
//leetcode submit region end(Prohibit modification and deletion)
