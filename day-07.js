const startTime = new Date().getTime();
const dayNumber = '07';

// load the file
const fs = require('fs');
const path = require('path');
const appData = fs.readFileSync(path.resolve(__dirname, `day-${dayNumber}.txt`), 'utf8').split(',').map(function (x) { 
    return parseInt(x, 10);
});

const fuelsPart1 = [];
const fuelsPart2 = [];

for (let i = 0; i < appData.length; i += 1) {
    const aligningPos = appData[i];

    let fuel1 = 0;
    let fuel2 = 0;

    for (let j = 0; j < appData.length; j += 1) {
        const startPos = appData[j];
        const move = Math.max(aligningPos, startPos) - Math.min(aligningPos, startPos);

        fuel1 += move;

        for (let j = 1; j < move + 1; j += 1) {
            fuel2 += j;
        }
    }

    fuelsPart1.push(fuel1);
    fuelsPart2.push(fuel2);
}

console.log('solution part 1:', Math.min(...fuelsPart1));
console.log('solution part 2:', Math.min(...fuelsPart2));

// Get endtime
const endTime = new Date().getTime();
console.log('Execution time:', endTime - startTime, 'ms');