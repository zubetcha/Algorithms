// let fs = require('fs')
// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n')

let input = require('fs').readFileSync('backjoon/sample.txt').toString().trim().split('\n')

let cnt = input.length

for (let i = 0; i < cnt - 1; i++) {
  let A = Number(input[i].split(' ')[0])
  let B = Number(input[i].split(' ')[1])
  console.log(A + B)
}
