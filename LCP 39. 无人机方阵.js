/**
 * @param {number[][]} source
 * @param {number[][]} target
 * @return {number}
 */
const minimumSwitchingTimes = function (source, target) {
  source = source.flat(Infinity)
  target = target.flat(Infinity)
  let n = target.length
  for (let i = 0; i < n; i++) {
    if (source.indexOf(target[i])!==-1){
      source.splice(source.indexOf(target[i]),1)
      target.splice(i,1)
      i--
      n--
    }
  }
  return source.length
};
