/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
/*
const removeKdigits = function (num, k) {
  let nArr = num.split('')
  let res = []
  let frequency = k
  for (let i = 0; i < nArr.length; i++) {
    if (frequency===0) break
    if (i === 0) res.push(nArr[i])
    if (i > 0) {
      if (nArr[i - 1] > nArr[i]) {
        res.pop()
        frequency--
      }
      res.push(nArr[i])
    }
  }
  for (let i = res.length; i < nArr.length - k; i--) {
    res.pop()
  }
  return res.join('')
};
*/

const removeKdigits = function (num, k) {
  const stk = [];
  for (const digit of num) {
    while (stk.length > 0 && stk[stk.length - 1] > digit && k>0) {
      stk.pop();
      k -= 1;
    }
    stk.push(digit);
  }

  for (; k > 0; --k) {
    stk.pop();
  }

  let res = "";
  //设置检查第一位
  let isLeadingZero = true;
  for (const digit of stk) {
    if (isLeadingZero && digit === '0') {
      continue;
    }
    isLeadingZero = false;
    res += digit;
  }
  return res === "" ? "0" : res;
};


console.log(removeKdigits('10200', 3));
