/**
 * @param {number[]} ages
 * @return {number}
 */
const numFriendRequests = function (ages) {
  if (ages.length < 2) {
    return 0
  }
  if (ages.length===2) {
    if (ages[0]===ages[1]) {
      return 2
    }
  }
  let res = 0
  for (let i = 0; i < ages.length; i++) {
    for (let j = 0; j < ages.length; j++) {
      if (ages[j] <= (ages[i] + 7)/2) {
        continue
      }if (ages[j] > ages[i]) {
        continue
      }if (ages[j]>100 && ages[i]<100) {
        continue
      }else {
        res++
      }
    }
  }
  return res
};


console.log(numFriendRequests([16,16]))
console.log(numFriendRequests([16,17,18]))
console.log(numFriendRequests([20,30,100,110,120]))
