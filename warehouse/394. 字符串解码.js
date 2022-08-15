/*给定一个经过编码的字符串，返回它解码后的字符串。

编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。

你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。

此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。
*/
/**
 * @param {string} s
 * @return {string}
 */
const decodeString = function (s) {
  let numStack = [];              // 倍数 num 的等待栈
  let strStack = [];              // 待拼接 str 的等待栈

  let num = 0, result = '';

  for (let i = 0; i < s.length; i++) {
    const item = s[i];

    if (!isNaN(item)) {              // 判断是数字时
      num = num * 10 + parseInt(item);
    } else if (item === '[') {
      strStack.push(result);
      result = '';
      numStack.push(num);
      num = 0;
    } else if (item === ']') {
      const repeatTimes = numStack.pop();         // 从栈中获取次数
      result = strStack.pop() + result.repeat(repeatTimes);
    } else {
      result += item;
    }
  }
  return result;
};



