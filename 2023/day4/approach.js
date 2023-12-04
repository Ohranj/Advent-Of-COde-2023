const fs = require('fs');

const strings = fs.readFileSync('input.txt', 'utf8').split('\n')



/**
 * Question 1
 */
let sum = 0;

for (let i = 0; i < strings.length; i++) {
    const str = "Card " + (i + 1) + ': ';
    const pattern = new RegExp(str, "i");
    const [ wins, picks ] = strings[i].replace(pattern, '').split(' | ').map((x) => x.split(' ').filter((x) => x))

    let matches = 1;
    for (const pick of picks) {
        for (const win of wins) {
            if (pick == win) {
                matches += matches;
            }
        }
    }
    sum += Math.floor(matches / 2);
}

console.log(sum)



/**
 * Question 2
 */
let arr = new Array(strings.length).fill().map(() => ({ matches: 0, copies: 1 }));

for (let i = 0; i < strings.length; i++) {
    const str = "Card " + (i + 1) + ': ';
    const pattern = new RegExp(str, "i");
    const [ wins, picks ] = strings[i].replace(pattern, '').split(' | ').map((x) => x.split(' ').filter((x) => x))
    
    for (const pick of picks) {
        for (const win of wins) {
            if (pick == win) {
                arr[i].matches++;
            }
        }
    }   
    
    for (let k = 0; k < arr[i].copies; k++) {
        for (let j = 1; j <= arr[i].matches; j++) {
            arr[i + j].copies++
        }
    }
}

const sum2 = arr.reduce((acc, c) => acc += c.copies, 0)
console.log(sum2)