const fs = require('fs');

const strings = fs.readFileSync('input.txt', 'utf8').split('\n')


/**
 * Question 1
 */
const rules = { red: 12, green: 13, blue: 14 }

let sum = 0;

for (const [index, game] of strings.entries()) {
    let isValid = true;

    const selections = game.split(': ')[1].split('; ');

    for(const selection of selections) {
        const cubes = selection.split(', ');
        for(const cube of cubes) {
            const [count, colour] = cube.split(' ');
            if (count > rules[colour]) {
                isValid = false;
                break;
            }
        }
    }
    if (isValid) {
        sum += (index + 1)
    }
}

console.group(sum)



/**
 * Question 2
 */
let sum2 = 0;

for (const game of strings) {
    const selections = game.split(': ')[1].split('; ');

    const bag = { red: 0, green: 0, blue: 0 }

    for(const selection of selections) {
        const cubes = selection.split(', ');
        for (const cube of cubes) {
            const [ count, colour ] = cube.split(' ');
            if (bag[colour] < count) {
                bag[colour] = Number(count)
            }
        }
    }

    sum2 += Object.values(bag).reduce((acc, c) =>  acc * c, 1)
}

console.group(sum2)