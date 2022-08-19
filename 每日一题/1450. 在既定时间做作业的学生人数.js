/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
const busyStudent = function (startTime, endTime, queryTime) {
  let arr = []
  let res = 0
  for (let i = 0; i < startTime.length; i++) {
    if (startTime[i] <= queryTime) {
      arr.push(i)
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (endTime[arr[i]]>=queryTime) {
      res ++
    }
  }
  return res
};
