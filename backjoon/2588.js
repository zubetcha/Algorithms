// let fs = require('fs');
// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let input = require('fs').readFileSync('sample.txt').toString().split('\n');

let A = Number(input[0]);
let B = input[1];

const num1 = parseInt(B.split('')[0]);
const num2 = parseInt(B.split('')[1]);
const num3 = parseInt(B.split('')[2]);

console.log(A*num3);
console.log(A*num2);
console.log(A*num1);
console.log(A*parseInt(B));