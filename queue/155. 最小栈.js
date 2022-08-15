/*
* 设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。

实现 MinStack 类:

MinStack() 初始化堆栈对象。
void push(int val) 将元素val推入堆栈。
void pop() 删除堆栈顶部的元素。
int top() 获取堆栈顶部的元素。
int getMin() 获取堆栈中的最小元素。
*/

class MinStack {
  queue = []
  min_queue = [Infinity]

  push(val) {
    this.queue.push(val)
    this.min_queue.push(Math.min(this.min_queue[this.min_queue.length-1],val))
  }
  pop() {
    this.queue.pop()
    this.min_queue.pop()
  }
  top() {
    return this.queue[this.queue.length-1]
  }
  getMin() {
    return this.min_queue[this.min_queue.length-1]
  }
}
