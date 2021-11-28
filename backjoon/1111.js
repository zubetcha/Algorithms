// let fs = require('fs');
// let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

let input = require('fs').readFileSync('sample.txt').toString().split(' ');

let arr = input;
let a = Number(arr[0]);
let b = Number(arr[1]);
console.log(a+b);