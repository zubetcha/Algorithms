let fs = require('fs');
let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let input = require('fs').readFileSync('sample.txt').toString().split('\n')

function solution(A, B, C) {
  const num = A * B * C
  let cnt = 0

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < num.length; j++) {
      if (Number(num[j]) === i) {
        cnt++
      }
    }
  }
  return cnt
}

console.log(solution)
