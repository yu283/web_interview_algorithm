/*
* 位运算
* 知识盲区
* */
const maxProduct = function (words) {
  // 预排序，字符串长的排在前面
  words.sort((a, b) => b.length - a.length);
  const n = words.length;
  const bitmask = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    // 生成掩码，出现 a 对应掩码第一位为 1，以此类推
    for (let letter of words[i]) {
      let j = letter.charCodeAt(0) - 97;
      bitmask[i] |= 1 << j;
    }
  }

  let ans = 0;
  for (let i = 0; i < n - 1; i++) {
    // 如果循环一开始的两字符串乘积小于 ans 则后面不可能出现更大的乘积了
    if (words[i].length * words[i + 1].length <= ans) break;
    for (let j = i + 1; j < n; j++) {
      if (words[i].length * words[j].length <= ans) break;
      // 通过与运算判断来两个字符串是否包含相同字母，与运算为 true 代表具有相同字母，因此这里取非
      if (!(bitmask[i] & bitmask[j])) {
        ans = words[i].length * words[j].length;
        break;
      }
    }
  }
  return ans;
};
