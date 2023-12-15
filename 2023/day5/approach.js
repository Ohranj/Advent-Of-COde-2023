const fs = require('fs');

const strings = fs.readFileSync('input.txt', 'utf8').split('\n');


const test = [
    'seeds: 79 14 55 13',
    'seed-to-soil map:',
    '50 98 2',
    '52 50 48',
    'soil-to-fertilizer map:',
    '0 15 37',
    '37 52 2',
    '39 0 15',
    'fertilizer-to-water map:',
    '49 53 8',
    '0 11 42',
    '42 0 7',
    '57 7 4',
    'water-to-light map:',
    '88 18 7',
    '18 25 70',
    'light-to-temperature map:',
    '45 77 23',
    '81 45 19',
    '68 64 13',
    'temperature-to-humidity map:',
    '0 69 1',
    '1 0 69',
    'humidity-to-location map:',
    '60 56 37',
    '56 93 4',
]

//destination range start | source range start | range length

//50 98 2
//52 50 48

// The first line has a destination range start of 50, a source range start of 98, and a range length of 2. This line means that the source range starts at 98 and contains two values: 98 and 99. The destination range is the same length, but it starts at 50, so its two values are 50 and 51. With this information, you know that seed number 98 corresponds to soil number 50 and that seed number 99 corresponds to soil number 51.

// The second line means that the source range starts at 50 and contains 48 values: 50, 51, ..., 96, 97. This corresponds to a destination range starting at 52 and also containing 48 values: 52, 53, ..., 98, 99. So, seed number 53 corresponds to soil number 55.

// Any source numbers that aren't mapped correspond to the same destination number. So, seed number 10 corresponds to soil number 10.


/**
 * Question 1 
 */
const data = test.reduce((acc, c) => {
    if (c.match(/[a-z]/)) {
        const [text, nums] = c.split(': ');
        acc.push({ item: text, nums: nums ? nums.split(' ') : [] })
    } else {
        acc[acc.length - 1].nums.push(c.split(' '))
    }
    return acc;
}, [])

for (const item of data) {
    if (item.item == 'seeds')  continue;
   
    const destinations = [];
    const sources = [];    

    for (let i = 0; i < item.nums.length; i++) {
        destinations.push(Number(item.nums[i][0]));
        sources.push(Number(item.nums[i][1]))
        for (let j = 1; j < Number(item.nums[i][2]); j++) {
            destinations.push(Number(item.nums[i][0]) + j);
            sources.push(Number(item.nums[i][1]) + j)
        } 
    }
    console.log(sources, destinations)
}