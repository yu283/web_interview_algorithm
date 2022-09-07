function makeChagne( change ) {
  // write code here
  let res = new Array(5).fill(0)

    while (change>0){
      if (change>=100){
        let num = Math.floor(change/100)
        res[0] = num
        change-=num*100
      }
      else if (change>=50){
        let num = Math.floor(change/50)
        res[1] = num
        change-=num*50
      }
      else if (change>=20){
        let num = Math.floor(change/20)
        res[2] = num
        change-=num*20
      }
      else if (change>=5){
        let num = Math.floor(change/5)
        res[3] = num
        change-=num*5
      }
      else {
        res[4] = change
        change=0
      }
    }

    return res
}


