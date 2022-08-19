const singleNumber1 = function (nums) {
  const map = new Map()
  for (const num of nums) {
    map.set(num,map.get(num)+1 || 1)

  }
  let res = 0
  map.forEach((k,v) => {
    console.log(k,v)
      if (v===1) {
        res = k
      }
  })
  return res
};


console.log(singleNumber([2,2,3,2]))

const singleNumber = function (nums) {
  const map = new Map();
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  let res = 0;
  for (const [num, occ] of map.entries()) {
    if (occ === 1) {
      res = num;
      break;
    }
  }
  return res;
};



var singleNumber_bitOperation = function(nums) {
  // 位运算
  let seen_once = seen_twice = 0
  nums.forEach(item => {
    seen_once = ~seen_twice & (seen_once ^ item)
    seen_twice = ~seen_once & (seen_twice ^ item)
  })
  return seen_once
};



