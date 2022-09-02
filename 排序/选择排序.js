
function selectSort(array) {
  const len = array.length
  let temp
  let minIndex
  for (let i = 0; i < len - 1; i++) {
    minIndex = i
    for (let j = i + 1; j < len; j++) {
      if (array[j] <= array[minIndex]) {
        minIndex = j
      }
    }
    temp = array[i]
    array[i] = array[minIndex]
    array[minIndex] = temp
  }
  return array
}

