// let fs = require('fs');
// let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

let input = require('fs').readFileSync('sample.txt').toString().split(' ');

const num = parseInt(input.toString());

if (num >= 90) {
    console.log('A');
} else if (num >= 80) {
    console.log('B');
} else if (num >= 70) {
    console.log('C');
} else if (num >= 60) {
    console.log('D')
} else {
    console.log('F')
}