/**
 * @param {number[]} amount
 * @return {number}
 */
const fillCups = function (amount) {
  // amount.sort()
  amount.sort((a,b) => {
      return a-b
  })
  console.log(amount)
  if (amount[2]>=amount[0]+amount[1]) {
    return amount[2]
  }else {
    return Math.ceil((amount[0]+amount[1]-amount[2])/2)+amount[2]
  }
};


console.log(fillCups([7,10,1]))

