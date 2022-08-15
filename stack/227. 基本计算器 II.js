/*给你一个字符串表达式 s ，请你实现一个基本计算器来计算并返回它的值。

整数除法仅保留整数部分。

你可以假设给定的表达式总是有效的。所有中间结果将在 [-231, 231 - 1] 的范围内。

注意：不允许使用任何将字符串作为数学表达式计算的内置函数，比如 eval() 。
*/
/**
 * @param {string} s
 * @return {number}
 */
const calculate = function (s) {
  let stack = [], n = 0, sign = '+'
  for (let i = 0; i <= s.length; i++) {
    const ch = s[i]
    if (ch === ' ') continue
    if (ch >= '0' && ch <= '9') {
      n = 10 * n + parseInt(ch)
      continue
    }
    // 还用 ~~ 替代 Math.floor
    /*
    * 逻辑分析：
    *   sign就是符号，初始给一个+给第一个数字
    * 如果碰到几号就push如数组，如果碰见-号就push它的负值
    * 如果碰到乘除就将栈顶的元素pop出来运算后push入数组
    * 最后执行Array.prototype.reduce来运行累加即可得到值
    * */
    switch (sign) {
      case '+':
        stack.push(n);
        break
      case '-':
        stack.push(-n);
        break
      case '*':
        stack.push(n * stack.pop());
        break
      case '/':
        stack.push(~~(stack.pop() / n));
        break
    }
    n = 0
    sign = ch
  }
  // 最后 stack 中的元素只要加起来就行了
  return stack.reduce((pre, cur) => pre + cur, 0)
};
