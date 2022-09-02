function fn(arr) {
  function sort(left, right) {
    let i = 0;
    let j = 0;
    let result = [];

    while (left[i] && right[j]) {
      if (left[i] < right[j]) {
        result.push(left[i++]);
      } else {
        result.push(right[j++]);
      }
    }

    while (left[i]) {
      result.push(left[i++]);
    }

    while (right[j]) {
      result.push(right[j++]);
    }

    return result;
  }

  function fen(arr) {
    if (arr.length < 2) return arr;
    let midIndex = Math.floor(arr.length / 2);
    let left = arr.slice(0, midIndex);
    let right = arr.slice(midIndex, arr.length);
    return sort(fen(left), fen(right));
  }

  return fen(arr);
}
