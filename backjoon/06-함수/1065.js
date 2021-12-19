let fs = require('fs')
let input = require('fs').readFileSync('/dev/stdin').toString().split(' ')

let input = require('fs').readFileSync('backjoon/sample.txt').toString().split(' ')

const N = Number(input[0])

const arr = []
for (let i = 1; i < N + 1; i++) {
  // i가 한수일 때만 arr.push
  let n0 = Number(String(i).charAt(0))
  let n1 = Number(String(i).charAt(1))
  let n2 = Number(String(i).charAt(2))
  if (i < 100) {
    arr.push(i)
  } else if (n1 - n0 === n2 - n1) {
    arr.push(i)
  }
}
console.log(arr.length)
