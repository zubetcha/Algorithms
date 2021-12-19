// let fs = require('fs')
// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n')

let input = require('fs').readFileSync('backjoon/sample.txt').toString().split('\n')

let line = Number(input[0])

let str = ''

for (let i = 1; i < line + 1; i++) {
  let A = Number(input[i].split(' ')[0])
  let B = Number(input[i].split(' ')[1])
  str = A + B + '\n'
}

console.log(str)
