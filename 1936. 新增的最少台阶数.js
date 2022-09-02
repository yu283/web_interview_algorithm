/**
 * @param {number[]} rungs
 * @param {number} dist
 * @return {number}
 */
const addRungs = function(rungs, dist) {
  let res = 0
  if (rungs[0]>dist){
    res = Math.ceil(rungs[0]/dist) - 1
  }
  for (let i = 1; i < rungs.length; i++) {
    if (rungs[i] - rungs[i - 1] > dist) {
      res+=Math.ceil((rungs[i] - rungs[i - 1])/dist) - 1
    }
  }
  return res
};
