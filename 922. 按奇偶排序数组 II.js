/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArrayByParityII = function (nums) {
  let evenStack = []
  let oddStack = []
  let res = []
  nums.forEach((item) => {
    if (item%2===0) {
      evenStack.push(item)
    }else {
      oddStack.push(item)
    }
  })
  while (evenStack.length!==0) {
    res.push(evenStack.pop())
    res.push(oddStack.pop())
  }
  return res
};

//双指针解法
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const doublePointerSortArrayByParityII = function (nums) {
  let length = nums.length
  let j = 1
  for (let i = 0; i < length; i+=2) {
    if (nums[i]%2!==0){
      while (nums[j]%2!==0){
        j+=2
      }
      swap(nums,i,j)
    }
  }
  return nums
};

const swap = (num,i,j) => {
  let temp = num[i]
  num[i] = num[j]
  num[j] = temp
}


console.log(doublePointerSortArrayByParityII([1,2]))
console.log(doublePointerSortArrayByParityII([1,2,4,3]))
