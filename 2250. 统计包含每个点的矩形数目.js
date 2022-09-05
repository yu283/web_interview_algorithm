/**
 * @param {number[][]} rectangles
 * @param {number[][]} points
 * @return {number[]}
 */
/*const countRectangles = function (rectangles, points) {
  let widthArr = rectangles.map((item) => {
      return item[0]
  })
  let heightArr = rectangles.map(item => {
    return item[1]
  })
  let n = points.length
  let res = []
  for (let i = 0; i < n; i++) {
    let key = 0
    for (let j = 0; j < widthArr.length; j++) {
      if (points[i][0]>=0&&points[i][0]<=widthArr[j]){
        if (points[i][1]>=0&&points[i][1]<=heightArr[j]){
          key++
        }
      }
    }
    res.push(key)
  }
  return res
};*/
const countRectangles = function (rectangles, points) {
  let n = rectangles.length
  let res = new Array(points.length).fill(0)
  const map = new Array(101).fill([])

  rectangles.sort(([w1,h1],[w2,h2])=>{
    return w1===w2?h1-h2:w1-w2
  })

  for (let i = 0; i < rectangles.length; i++) {
    const [w,h] = rectangles[i]
    map[h].push(w)
  }

  for (let i = 0; i < points.length; i++) {
    const [w,h] = points[i]
    let key = 0
    for (let j = 0; j < h; j++) {
      const arr = map[j]
      let x = dichotomize(arr,w)
      key += x
    }
    res[i]=key
  }
  return res
};

const dichotomize = (arr,k) => {
  let n = arr.length
  let left = 0
  let right = n - 1
  while (left < right) {
    let mid = left + (right - left)/2
    if (arr[mid] >= k){
      right = mid
    }else {
      left = mid + 1
    }
  }
  return arr[right] >= k ? n -right : 0
}
