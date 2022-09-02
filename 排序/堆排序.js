
function heap_sort(arr) {
  var len = arr.length
  var k = 0
  function swap(i, j) {
    var temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }

  function max_heapify(start, end) {
    var dad = start
    var son = dad * 2 + 1
    if (son >= end) return
    if (son + 1 < end && arr[son] < arr[son + 1]) {
      son++
    }

    if (arr[dad] <= arr[son]) {
      swap(dad, son)
      max_heapify(son, end)
    }
  }

  for (var i = Math.floor(len / 2) - 1; i >= 0; i--) {
    max_heapify(i, len)
  }



  for (var j = len - 1; j > k; j--) {
    swap(0, j)
    max_heapify(0, j)
  }
  return arr

}

//高频时间触发,但n秒内只会执行一次,所以节流会稀释函数的执行频率。
const throttle = (fn,time) => {
  let flag = true
  return function () {
    if (!flag) return
    flag = false
    setTimeout(() => {
      fn.apply(this,arguments)
      flag = true
    },time)
  }
}
//节流常应用于鼠标不断点击触发、监听滚动事件。

//触发高频时间后n秒内函数只会执行一次,如果n秒内高频时间再次触发,则重新计算时间
const debounce = (fn,time) => {
  let timeout = null
  return function (){
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      fn.apply(this,arguments)
    },time)
  }
}
//防抖常应用于用户进行搜索输入节约请求资源，window触发resize事件时进行防抖只触发一次
