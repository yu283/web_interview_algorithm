/**
 * @param {string} s
 * @return {string}
 */
const removeDuplicateLetters = function (s) {
  let res = []
  for (let i = 0; i < s.length; i++) {
    if (res.includes(s[i])) continue
    while (res[res.length - 1] > s[i] && s.indexOf(res[res.length - 1], i) > i) {
      res.pop()
    }
    res.push(s[i])
  }
  return res.join('')
};

/**
 * 贪心 + 单调栈解法
 * 思路与算法
 * 首先考虑一个简单的问题：给定一个字符串 ss，如何去掉其中的一个字符 \textit{ch}ch，使得得到的字符串字典序最小呢？答案是：找出最小的满足 s[i]>s[i+1]s[i]>s[i+1] 的下标 ii，并去除字符 s[i]s[i]。为了叙述方便，下文中称这样的字符为「关键字符」。
 * 在理解这一点之后，就可以着手本题了。一个直观的思路是：我们在字符串 ss 中找到「关键字符」，去除它，然后不断进行这样的循环。但是这种朴素的解法会创建大量的中间字符串，我们有必要寻找一种更优的方法。
 * 我们从前向后扫描原字符串。每扫描到一个位置，我们就尽可能地处理所有的「关键字符」。假定在扫描位置 s[i-1]s[i−1] 之前的所有「关键字符」都已经被去除完毕，在扫描字符 s[i]s[i] 时，新出现的「关键字符」只可能出现在 s[i]s[i] 或者其后面的位置。
 * 于是，我们使用单调栈来维护去除「关键字符」后得到的字符串，单调栈满足栈底到栈顶的字符递增。如果栈顶字符大于当前字符 s[i]s[i]，说明栈顶字符为「关键字符」，故应当被去除。去除后，新的栈顶字符就与 s[i]s[i] 相邻了，我们继续比较新的栈顶字符与 s[i]s[i] 的大小。重复上述操作，直到栈为空或者栈顶字符不大于 s[i]s[i]。
 * 我们还遗漏了一个要求：原字符串 ss 中的每个字符都需要出现在新字符串中，且只能出现一次。为了让新字符串满足该要求，之前讨论的算法需要进行以下两点的更改。
 * 在考虑字符 s[i]s[i] 时，如果它已经存在于栈中，则不能加入字符 s[i]s[i]。为此，需要记录每个字符是否出现在栈中。
 * 在弹出栈顶字符时，如果字符串在后面的位置上再也没有这一字符，则不能弹出栈顶字符。为此，需要记录每个字符的剩余数量，当这个值为 00 时，就不能弹出栈顶字符了。
 */
const removeDuplicateLetters2 = function(s) {
  // 标记次数
  const arr = new Array(26).fill(0);
  // 标记是否访问过
  const visited = new Array(26).fill(false);
  let temp;
  for(let item of s){
    temp = item.charCodeAt()-97;
    arr[temp] = arr[temp]+1;
  }
  let stack = [];
  for(let key of s){
    temp = key.charCodeAt()-97;
    // 没有访问过
    if(!visited[temp]){
      // 对比栈顶元素
      while(stack.length>0&&stack[stack.length-1]>key){
        let t = stack[stack.length-1].charCodeAt()-97;
        // 元素在后面还出现过
        if(arr[t]>0){
          // 标记栈顶元素未访问过
          visited[t]=false;
          // 将栈顶元素弹出
          stack.pop();
        }else{
          // 栈顶元素在后面没有出现过，跳过不做处理
          break;
        }
      }
      // 标记当前遍历元素被访问过
      visited[temp]=true;
      // 将当前元素压入栈中
      stack.push(key);
    }
    // 将当前元素在后续的出现次数中减1
    arr[temp]-=1;
  }
  return stack.join("");
};



