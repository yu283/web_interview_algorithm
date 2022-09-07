const jiexi = (s) => {
  let arr = s.split('?')
  let str = arr[1]
  let resArr = str.split('&')
  let res = {}
  for (let i = 0; i < resArr.length; i++) {
    if (resArr[i].indexOf('=')!==-1){
      let temp = resArr[i].split('=')
      res[temp[0]] = temp[1]
    }else {
      res[resArr[i]]=""
    }
  }
  return JSON.stringify(res)
}

console.log(jiexi('http://www.qunar.com?a=aa&b=bb'))

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.on('line', function (line) {
  const tokens = line.split(' ');
  console.log(parseInt(tokens[0]) + parseInt(tokens[1]));
});
