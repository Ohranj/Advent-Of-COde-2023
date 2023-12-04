const fs = require('fs');

// const test = fs.readFileSync('input.txt', 'utf8').split('\n')


const test = [
    '467..114..',
    '...*......',
    '..35..633.',
    '......#...',
    '617*......',
    '.....+.58.',
    '..592.....',
    '......755.',
    '...$.*....',
    '.664.598..'
]

let sums = 0;

for (let i = 0; i < test.length; i++) {
    let vals = []

    for (let k = 0; k < test[i].length; k++) {
        if (test[i][k].match(/[0-9]/)) {
            vals.push({ value: test[i][k], position: k });
            continue;
        } 
        
        if (vals.length) {
            let ans = false;
            if (i > 0) {
                for (let j = vals[0].position - 1; j <= vals[vals.length - 1].position + 1; j++) {
                    const prevRow = test[i - 1];
                    if (prevRow[j] != '.' && isNaN(prevRow[j])) {
                        ans = true
                    }
                }
            }

            if (test[i][vals[0].position - 1] != '.') {
                ans = true
            }

            if (test[i][vals[vals.length - 1].position + 1] != '.') {
                ans = true
            }

            if (i < test.length - 1) {
                for (let j = vals[0].position - 1; j <= vals[vals.length - 1].position + 1; j++) {
                    const nextRow = test[i + 1];
                    if (nextRow[j] != '.' && isNaN(nextRow[j])) {
                        ans = true
                    }
                }
            }

            if (ans) {
                const sum = vals.reduce((acc, c) => acc += c.value, '')
                sums += Number(sum)
            }
            vals.length = 0;
        }
        
    }
}

console.log(sums)