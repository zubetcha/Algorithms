// let fs = require('fs');
// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

// let input = require('fs').readFileSync('sample.txt').toString().split('\n');

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line)
})
    .on('close', function () {
        let x = parseInt(input[0]);
        let y = parseInt(input[1]);

        if (x > 0) {
            y > 0 ? console.log(1) : console.log(4);
        } else {
            y > 0 ? console.log(2) : console.log(3);
        }
        process.exit();
    });