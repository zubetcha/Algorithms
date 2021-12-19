// let fs = require('fs')
// let input = require('fs').readFileSync('/dev/stdin').toString().split(' ')

let input = require('fs').readFileSync('backjoon/sample.txt').toString().split(' ')

let word = input[0]
let arr = []

for (let i = 0; i < word.length; i++) {
  if (
    word[i] + word[i + 1] === 'c=' ||
    word[i] + word[i + 1] === 'c-' ||
    word[i] + word[i + 1] === 'd-' ||
    word[i] + word[i + 1] === 'lj' ||
    word[i] + word[i + 1] === 'nj' ||
    word[i] + word[i + 1] === 's=' ||
    word[i] + word[i + 1] === 'z='
  ) {
    arr.push(word[i] + word[i + 1])
    word = word.replace(word[i] + word[i + 1], '  ')
  } else if (word[i] + word[i + 1] + word[i + 2] === 'dz=') {
    arr.push(word[i] + word[i + 1] + word[i + 2])
    word = word.replace(word[i] + word[i + 1] + word[i + 2], '   ')
  } else {
    arr.push(word[i])
  }
}
let answer = arr.filter((al) => al !== ' ')
console.log(word)
console.log(arr)
console.log(answer)
console.log(answer.length)
