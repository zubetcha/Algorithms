// let fs = require('fs')
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ')

let input = require('fs').readFileSync('backjoon/sample.txt').toString().trim().split(' ')

let cnt = 0
input.map((word) => {
  word !== '' ? (cnt += 1) : (cnt += 0)
})
console.log(cnt)
