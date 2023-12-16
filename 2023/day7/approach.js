const fs = require('fs');

const strings = fs.readFileSync('input.txt', 'utf8').split('\n');



/**
 * Question 1
 */
const strengths = ['A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2'];
const camelCards = { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [] }

for(let i = 0; i < strings.length; i++) {
    const hand = strings[i].split(' ')[0];
    const tallies = hand.split('').reduce((acc, c, i, arr) => {
        acc[c] ? acc[c]++ : acc[c] = 1;
        return i == arr.length - 1 ? Object.values(acc) : acc;
    }, {});
    switch(tallies.length) {
        case 5:
            camelCards[7].push(strings[i]);
        break;
        case 4:
            camelCards[6].push(strings[i]);
        break;
        case 3:
            tallies.find((x) =>  x == 3)
                ? camelCards[4].push(strings[i])
                : camelCards[5].push(strings[i]);
        break;
        case 2:
            tallies.find((x) => x == 4)
                ? camelCards[2].push(strings[i])
                : camelCards[3].push(strings[i]);
        break;
        default:
            camelCards[1].push(strings[i]);
        break;
    }
}

let sum = [];
for (const x in camelCards) {
    const order = camelCards[x].sort((a, b) => {
        const cur = a.split(' ')
        const next= b.split(' ')
        for (let i = 0; i < cur[0].length; i++) {
            const curIndx = strengths.findIndex((x) => x == cur[0][i]);
            const nextIndx = strengths.findIndex((x) => x == next[0][i]);
            if (curIndx < nextIndx) return -1;
            if (curIndx > nextIndx) return 1;
            continue;
        }
    })
    sum = [...sum, ...order];
}

const ans = sum.reverse().reduce((acc, c, i) => acc += c.split(' ')[1] * (i + 1), 0)

console.log(ans)




/**
 * Question 2
 */
const strengths2 = ['A', 'K', 'Q', 'T', '9', '8', '7', '6', '5', '4', '3', '2', 'J'];
const camelCards2 = { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [] }

for(let i = 0; i < strings.length; i++) {
    const hand = strings[i].split(' ')[0];

    let numJs = 0;
    const tally = hand.split('').reduce((acc, c, i, arr) => {
        c == 'J' ? numJs++ : acc[c] ? acc[c]++ : acc[c] = 1;
        
        if (i == arr.length - 1) {
            acc = Object.values(acc)
            if (numJs) {
                acc.sort().reverse();
                acc[0] += numJs;
            }
        }
        return acc;
    }, {})
    
    switch(tally.length) {
        case 5:
            camelCards2[7].push(strings[i]);
        break;
        case 4:
            camelCards2[6].push(strings[i]);
        break;
        case 3:
            tally.find((x) =>  x == 3)
                ? camelCards2[4].push(strings[i])
                : camelCards2[5].push(strings[i]);
        break;
        case 2:
            tally.find((x) => x == 4)
                ? camelCards2[2].push(strings[i])
                : camelCards2[3].push(strings[i]);
        break;
        default:
            camelCards2[1].push(strings[i]);
        break;
    }
}

let sum2 = [];
for (const x in camelCards2) {
    const order = camelCards2[x].sort((a, b) => {
        const cur = a.split(' ')
        const next= b.split(' ')
        for (let i = 0; i < cur[0].length; i++) {
            const curIndx = strengths2.findIndex((x) => x == cur[0][i]);
            const nextIndx = strengths2.findIndex((x) => x == next[0][i]);
            if (curIndx < nextIndx) return -1;
            if (curIndx > nextIndx) return 1;
            continue;
        }
    })
    sum2 = [...sum2, ...order];
}

const ans2 = sum2.reverse().reduce((acc, c, i) => acc += c.split(' ')[1] * (i + 1), 0)

console.log(ans2)