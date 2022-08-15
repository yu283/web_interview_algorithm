/*
*
* 请你设计一个支持下述操作的栈。

实现自定义栈类 CustomStack ：

CustomStack(int maxSize)：用 maxSize 初始化对象，maxSize 是栈中最多能容纳的元素数量，栈在增长到 maxSize 之后则不支持 push 操作。
void push(int x)：如果栈还未增长到 maxSize ，就将 x 添加到栈顶。
int pop()：弹出栈顶元素，并返回栈顶的值，或栈为空时返回 -1 。
void inc(int k, int val)：栈底的 k 个元素的值都增加 val 。如果栈中元素总数小于 k ，则栈中的所有元素都增加 val 。
 
*/

/**
 * @param {number} maxSize
 */
class CustomStack {
  value = []
  constructor(maxSize) {
    this.maxSize = maxSize
  }

  push(x) {
    if (this.value.length >= this.maxSize) {
      return false
    } else {
      this.value.push(x)
    }
  };
  pop () {
    if (this.value.length===0) {
      return -1
    }else {
      return this.value.pop()
    }
  };
  increment(k, val) {
    if (this.value.length < k) {
      for (let i = 0; i < this.value.length; i++) {
        this.value[i] += val
      }
    }else {
      for (let i = 0; i < k; i++) {
        this.value[i] += val
      }
    }
  };
}

/**
 * 您的 CustomStack 对象将被实例化并按如下方式调用：
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */
