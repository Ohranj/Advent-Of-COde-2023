const fs = require('fs');

const rows = fs.readFileSync('input.txt', 'utf8').split('\n').reduce((acc, c) => {
    const row = c.split(' ');
    let asNumberArr = [];
    for (const x of row) {
        asNumberArr.push(Number(x))
    }
    acc.push(asNumberArr);
    return acc;
}, [])


/**
 * Question 1
 */
const sequences = rows

const checkDepth = (sequence) => {
    return sequence.reduce((acc, c, i, arr) => {
        if (i == 0) {
            return acc;
        } 
        acc.push(arr[i] - arr[i - 1])
        return acc;
    }, [])
}

let total = 0;

for (const sequence of sequences) {
    let isAllZero = false;
    let depth = [sequence];
    while(!isAllZero) {
        const diffs = checkDepth(depth[depth.length - 1]);
        isAllZero = diffs.every((x) => !x);
        depth.push(diffs);
    }

    for (let i = depth.length - 1; i > 0; i--) { 
        const parentValue = depth[i - 1].length - 1;
        total += depth[i - 1][parentValue]
    }
}

console.log(total)


/**
 * Question 2
 */