/**
 * @param {number[]} arr
 * @return {number}
 */
const maxChunksToSorted = function (arr) {
  const stack = []
  for (const number of arr) {
    if (stack.length === 0) {
      stack.push(number)

    }
    else if (number >= stack[stack.length -1]) {
      stack.push(number)
    }
    else if (number < stack[stack.length -1]) {
      const max = stack.pop()
      while (number < stack[stack.length - 1]) {
        stack.pop()
      }
      stack.push(max)
    }
  }
  return stack.length
};
