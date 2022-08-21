function wear(n,s1,s2) {
  const res = []
  const arr1 = s1.split('')
  const arr2 = s2.split('')
  for (let i=0;i<n;i++) {
    res.push(arr1[i])
    res.push(arr2[i])
  }

  return res.join('')
}


console.log(wear(4, 'aabb', 'ccdd'));

