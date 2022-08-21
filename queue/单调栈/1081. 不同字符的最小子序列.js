// 返回 s 字典序最小的子序列，该子序列包含 s 的所有不同字符，且只包含一次。

/**
 * @param {string} s
 * @return {string}
 */
const removeDuplicateLetters = function(s) {
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
