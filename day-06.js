const startTime = new Date().getTime();
const dayNumber = '06';

// load the file
const fs = require('fs');
const path = require('path');
const appData = fs.readFileSync(path.resolve(__dirname, `day-${dayNumber}.txt`), 'utf8').split(',').map((n) => parseInt(n));

function getEndCount(numberOfDays) {
    let fishes = new Array(9).fill(0);
    let solution = 0;

    appData.forEach((value) => fishes[value] += 1);
  
    for (let i = 0; i < numberOfDays; i += 1) {
      const currentItemsWithValue0 = fishes.shift();
      fishes = [...fishes, currentItemsWithValue0];
      fishes[6] += currentItemsWithValue0;
    }

    for (let i = 0; i < fishes.length; i += 1) {
        solution = solution+ fishes[i];
    } 

    return solution;
  }

console.log('Solution part 1:', getEndCount(80));
console.log('Solution part 2:', getEndCount(256));

// Get endtime
const endTime = new Date().getTime();
console.log('Execution time:', endTime - startTime, 'ms');