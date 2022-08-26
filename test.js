const arr = [26,19,11,14,18,4,7,1,30,23,19,8,10,6,26,3]
let res = arr.reduce((x,y) => {
    return x+y
})
console.log(res)
console.log(res%26)
console.log(17+26)
for (let i = 2; i < arr.length; i++) {
    console.log(arr[i-2]+arr[i-1]+arr[i])
}
