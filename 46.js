/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function (nums) {
  const res = []
  const item = []
  recursion(nums, nums.length, [])
  return res

  function recursion(n, key, isUsed) {
    if (item.length === key) {
      res.push([...item])
      return
    }
    for (let i = 0; i < key; i++) {
      if (!isUsed[i]) {
        item.push(n[i])
        isUsed[i] = true
        recursion(n, key, isUsed)
        item.pop()
        isUsed[i] = false
      }
    }
  }
};

let nums = [1,2,3]
console.log(permute(nums));

