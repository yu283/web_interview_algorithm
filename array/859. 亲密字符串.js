/*给你两个字符串 s 和 goal ，只要我们可以通过交换 s 中的两个字母得到与 goal 相等的结果，就返回 true ；否则返回 false 。

交换字母的定义是：取两个下标 i 和 j （下标从 0 开始）且满足 i != j ，接着交换 s[i] 和 s[j] 处的字符。

例如，在 "abcd" 中交换下标 0 和下标 2 的元素可以生成 "cbad" 。
*/

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function(s, goal) {
  var LenA = s.length;
  var LenB = goal.length;
  // 长度不等 false
  if (LenA !== LenB)  return false
  // 如果字符串相等，看字符串中相同的字符个数是否>=2
  if (s === goal) {
    // 求A中相同字符的个数
    return s.length - (new Set(s.split('')).size) >= 1;
  }
  // 如果字符串不等，看不同的部分字符个数是否==2
  var diffsA = [];
  var diffsB = [];
  for (var i = 0; i < LenA; i ++) {
    if (s[i] !== goal[i]) {
      diffsA.push(s[i]);
      diffsB.push(goal[i]);
    }
  }
  if (diffsA.length !== 2)  return false
  return diffsA.join('') === diffsB.reverse().join('');
}

// const buddyStrings = function (s, goal) {
//   if (s.length !== goal.length) return false
//   if (s.length === 1 || goal.length===1) return false
//   let count = 0
//   let sA = Array.from(s)
//   console.log(sA)
//   let gA = Array.from(goal)
//   console.log(gA)
//   let start,end
//   for (let i = 0; i <sA.length; i++) {
//     if (sA[i] !== gA[i]) {
//       if (count===0) {
//         count++
//         start = i
//       } else if(count===1) {
//         count++
//         end=i
//       } else {
//         return false
//       }
//     }
//   }
//   return sA[start] === gA[end] && sA[end] === gA[start];
//
// };
console.log(buddyStrings('ab', 'ab'));
