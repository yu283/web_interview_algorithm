const singleNumber = function (nums) {
  return nums.reduce((x, y) => x ^ y)
};
