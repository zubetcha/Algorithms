let fs = require('fs')
let input = require('fs').readFileSync('/dev/stdin').toString().split('\n')

let input = require('fs').readFileSync('backjoon/sample.txt').toString().split(' ')

let num = Number(input)

let star = ''
let blank = ''

for (let i = 1; i < num + 1; i++) {
  star = star + '*'
  for (let j = 0; j < num - i; j++) {
    blank = blank + ' '
  }
  console.log(blank + star)
  blank = ''
}
