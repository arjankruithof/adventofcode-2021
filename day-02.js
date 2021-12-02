const startTime = new Date().getTime();
const dayNumber = '02';

// load the file
const fs = require('fs');
const path = require('path');
const appData = fs.readFileSync(path.resolve(__dirname, `day-${dayNumber}.txt`), 'utf8').split('\n');

// part 1
let horizontalPosition = 0;
let depth = 0;

for (let i = 0; i < appData.length; i += 1) {
    const direction = appData[i].split(' ')[0];
    const count = parseInt(appData[i].split(' ')[1], 10);

    if (direction === 'forward') {
        horizontalPosition += count;
    }

    if (direction === 'down') {
        depth += count;
    }

    if (direction === 'up') {
        depth -= count;
    }
}

console.log('solution part 1', horizontalPosition * depth);

// part 2
horizontalPosition = 0;
depth = 0;
let aim = 0;

for (let i = 0; i < appData.length; i += 1) {
    const direction = appData[i].split(' ')[0];
    const count = parseInt(appData[i].split(' ')[1], 10);

    if (direction === 'forward') {
        horizontalPosition += count;
        depth += count * aim;
    }

    if (direction === 'down') {
        aim += count;
    }

    if (direction === 'up') {
        aim -= count;
    }
}

console.log('solution part 2', horizontalPosition * depth);



// Get endtime
const endTime = new Date().getTime();
console.log('Execution time:', endTime - startTime, 'ms');