/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
const chalkReplacer = function (chalk, k) {
  while (k>=0){
    for (let i = 0; i < chalk.length; i++) {
      k-=chalk[i]
      if (k<0) {
        return i
      }
    }
  }
};

console.log(chalkReplacer([5,1,5],22))
