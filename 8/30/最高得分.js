const maxScore = (a,b,c) => {
  let youCount = (a>b?b:a)>c?c:(a>b?b:a)
  console.log('youCount',youCount);
  console.log(b)
  let ooCount = Math.floor(b-youCount-1)
  if (ooCount < 0 ) ooCount = 0
  console.log('ooCount',ooCount);
  return youCount * 2 + ooCount
}


/*
console.log('1 2 3'.split(' ').join())*/
// let x = '1 2 3'.split(' ')
console.log(maxScore(1,1,1))
console.log(maxScore(1,0,1))
console.log(maxScore(0,2,1))
