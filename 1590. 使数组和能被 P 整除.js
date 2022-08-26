/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
const minSubarray = function (nums, p) {

  const length = nums.length;
  let sum = nums.reduce((x,y) => {
      return x+y
  })

  let mod = sum % p;
  if (mod === 0) {
    return 0;
  }

  const map = new Map;
  let curCount = 0;
  let res = Infinity;
  map.set(0, -1);
  for (let i = 0; i < length; i++) {
    curCount += nums[i];
    const curPos = (curCount - mod + p) % p;
    if (map.has(curPos)) {
      res = Math.min(res, i - map.get(curPos));
      if (res === 1 && length > 1) {
        return res;
      }
    }
    map.set(curCount % p, i)
  }
  res >= length && (res = Infinity);
  return res === Infinity ? -1 : res;
};
