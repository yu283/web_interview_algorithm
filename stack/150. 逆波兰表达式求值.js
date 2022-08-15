/*
* 根据 逆波兰表示法，求表达式的值。

有效的算符包括 +、-、*、/ 。每个运算对象可以是整数，也可以是另一个逆波兰表达式。

注意 两个整数之间的除法只保留整数部分。

可以保证给定的逆波兰表达式总是有效的。换句话说，表达式总会得出有效数值且不存在除数为 0 的情况。
*/

/**
 * @param {string[]} tokens
 * @return {number}
 */
const evalRPN = function (tokens) {
  const stack = [];
  const n = tokens.length;
  for (let i = 0; i < n; i++) {
    const token = tokens[i];
    if (isNumber(token)) {
      stack.push(parseInt(token));
    } else {
      const num2 = stack.pop();
      const num1 = stack.pop();
      if (token === '+') {
        stack.push(num1 + num2);
      } else if (token === '-') {
        stack.push(num1 - num2);
      } else if (token === '*') {
        stack.push(num1 * num2);
      } else if (token === '/') {
        stack.push(num1 / num2 > 0 ? Math.floor(num1 / num2) : Math.ceil(num1 / num2));
      }
    }
  }
  return stack.pop();
};

const isNumber = (token) => {
  return !('+' === token || '-' === token || '*' === token || '/' === token );
}
