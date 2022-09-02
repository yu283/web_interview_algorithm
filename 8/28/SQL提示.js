const fn = (arr,s) => {
  let res = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes(s)){
      res.push(arr[i])
    }
  }
  res.sort()
  console.log(res.length)
  for (let i = 0; i < res.length; i++) {
    console.log(res[i])
  }
}


console.log(fn(['select',
  'from',
  'where',
  'limit',
  'origin_log_db',
  'event_log_table',
  'user_id',
  'from_mobile'], 'f'));
