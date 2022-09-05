/**
 * @param {number[]} numbers
 * @return {number}
 */
const minArray = function (numbers) {
  let res = Infinity
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i]<res) {
      res = numbers[i]
    }
  }
  return res
};
