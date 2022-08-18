const findSubstringInWraproundString = function (p) {
  const arr = new Array(26).fill(0);
  let num = 0;
  for (let i = 0; i < p.length; i++) {
    if (i > 0 && (p[i].charCodeAt() - p[i - 1].charCodeAt() === 1 || p[i].charCodeAt() - p[i - 1].charCodeAt() === -25)) {
      num += 1
    } else {
      num = 1;
    }
    arr[p[i].charCodeAt() - 97] = arr[p[i].charCodeAt() - 97] > num ? arr[p[i].charCodeAt() - 97] : num
  }
  return arr.reduce((pre, cur) => pre + cur
  )
};

