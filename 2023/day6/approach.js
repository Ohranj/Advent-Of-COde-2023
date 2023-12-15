const fs = require('fs');

const strings = fs.readFileSync('input.txt', 'utf8').split('\n');


const [time, distance] = strings;

/**
 * Question 1
 */
const times = time.replace(/[A-Za-z\:]/g, '').trim().split('  ').filter((x) => x.trim())
const distances = distance.replace(/[A-Za-z\:]/g, '').trim().split('  ').filter((x) => x.trim())

let sumTally = 1;
let roundTally = 0;

for(let i = 0; i < times.length; i++) {
    roundTally = 0;
    for (let k = 0; k <= times[i]; k++) {
        const held = times[i] - k
        if ((k * held) > distances[i]) {
            roundTally++;
        }
    }
    sumTally *= roundTally;
}

console.log(sumTally)



/**
 * Question 2
 */
const raceTime = time.replace(/[A-Za-z\:\ ]/g, '').trim()
const raceDistance = distance.replace(/[A-Za-z\:\ ]/g, '').trim()

let winningTally = 0;

for (let i = 0; i < raceTime; i++) {
    const held = raceTime - i;
    if ((i * held) > raceDistance) {
        winningTally++;
    }
}

console.log(winningTally)