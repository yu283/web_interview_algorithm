let bubble = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  let left = [];
  let right = [];
  let numIndex = Math.floor(arr.length / 2);
  let num = arr.splice(numIndex, 1);
  arr.forEach((item) => {
    if (item < num) {
      left.push(item);
    } else if (item > num) {
      right.push(item);
    }
  });
  return bubble(left).concat(num, bubble(right));
};
