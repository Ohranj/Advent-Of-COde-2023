const fs = require('fs');


const strings = fs.readFileSync('input.txt', 'utf8').split('\n')






/**
 * Question 1
 */
let sum = 0;

for(let i = 0; i < strings.length; i ++) {
    const str = strings[i].replace(/[a-z]/gi, '')
    sum += Number(str[0] * 10) + Number(str[str.length - 1])
}

console.log(sum)



/**
 * Questions 2
 */
const words = [ {word: 'one',val: 1}, {word: 'two',val: 2}, {word: 'three',val: 3}, {word: 'four',val: 4}, {word: 'five',val: 5}, {word: 'six',val: 6}, {word: 'seven',val: 7}, {word: 'eight',val: 8}, {word: 'nine',val: 9} ];

let sum2 = 0;

for (let i = 0; i < strings.length; i++) {
    let matches = [];
    for (let k = 0; k < strings[i].length; k++) {
        if (isNaN(strings[i][k])) {
            for (const x of words) {
                const { word, val } = x
                const check = strings[i].slice(k, k + word.length);
                if (check == word) {
                    matches.push(val);
                    break;
                }
            }
        } else {
            matches.push(Number(strings[i][k]))
        }
    }
    sum2 += (matches[0] * 10) + matches[matches.length - 1]   
}

console.log(sum2)
