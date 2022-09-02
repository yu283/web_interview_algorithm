function bubbleSort(array) {
  const len = array.length
  if (len < 2) return array
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[i]) {
        const temp = array[j]
        array[j] = array[i]
        array[i] = temp
      }
    }
  }
  return array
}

