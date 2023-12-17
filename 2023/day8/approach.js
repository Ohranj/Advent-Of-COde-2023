const fs = require('fs');

const strings = fs.readFileSync('input.txt', 'utf8').split('\n\n');



/**
 * Question 1
 */
const [routes, nodes] = strings;

let i = 0;
let steps = 0;

let currentNode = nodes.split('\n').find((x) => x.substring(0, 3) == 'AAA')

while (true) {
    if (currentNode.substring(0, 3) == 'ZZZ') {
        break;
    }
    
    const paths = currentNode.substring(7, 15).split(', ');
    const toFind = routes[i] == 'L' ? paths[0] : paths[1];
    currentNode = nodes.split('\n').find((x) => x.substring(0, 3) == toFind)

    i = i == routes.length - 1
        ? 0
        : i + 1
   
    steps++
}

console.log(steps)



/**
 * Question 2
 */

