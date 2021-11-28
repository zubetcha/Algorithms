// let fs = require('fs');
// let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

let input = require('fs').readFileSync('sample.txt').toString().split(' ');

const H = Number(input[0]);
const M = Number(input[1]);

if (M >= 45) {
    console.log(H, M-45);
} else if (H >= 1) {
    console.log(H-1, M+15);
} else {
    console.log(23, M+15);
}

// 1. M이 45보다 크거나 같은 경우
// 2-1. H가 1보다 크거나 같고 M이 45보다 작은 경우
// 2-2. H가 1보다 작고 M이 45보다 작은 경우
