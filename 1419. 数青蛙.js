const minNumberOfFrogs = (croakOfFrogs)=> {
  let c = 0
  let r = 0
  let o = 0
  let a = 0
  let k = 0
  let res = 0
  for (let char of croakOfFrogs) {
    switch (char) {
      case 'c':
        c++
        break
      case 'r':
        r++
        break
      case 'o':
        o++
        break
      case 'a':
        a++
        break
      case 'k':
        k++
        break
      default:
        return -1
    }
    if (c<r||r<o||o<a||a<k) return -1
    res = res>c?res:c
    if (k===1) {
      c--
      r--
      a--
      o--
      k--
    }
  }
  if (c===0&&r===0&&o===0&&a===0&&k===0) return res
  return -1
};
