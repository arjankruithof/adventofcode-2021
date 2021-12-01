const startTime = new Date().getTime();
const dayNumber = '01';

// load the file
const fs = require('fs');
const path = require('path');
const appData = fs.readFileSync(path.resolve(__dirname, `day-${dayNumber}.txt`), 'utf8').split('\n');

// part 1
let numberOfIncreasedValues = 0;
let numberOfDescreadedValues = 0;
let previousValue = 0;

for (let i = 0; i < appData.length; i += 1) {
    const currentValue = parseInt(appData[i], 10);

    if (previousValue === 0) {
        previousValue = currentValue;
    }

    if (currentValue > previousValue) {
        numberOfIncreasedValues += 1;
    } else if (currentValue < previousValue) {
        numberOfDescreadedValues += 1;
    }

    previousValue = appData[i];
}

// solution part 1:
console.log('Solution part 1: number of increased values', numberOfIncreasedValues);

// part 2
numberOfIncreasedValues = 0;
numberOfDescreadedValues = 0;
previousValue = 0;

for (let i = 0; i < appData.length - 2; i += 1) {
    const sumOfMeasurementWindow = parseInt(appData[i], 10) + parseInt(appData[i + 1], 10) + parseInt(appData[i + 2], 10);

    if (previousValue === 0) {
        previousValue = sumOfMeasurementWindow;
    }

    if (sumOfMeasurementWindow > previousValue) {
        numberOfIncreasedValues += 1;
    } else if (sumOfMeasurementWindow < previousValue) {
        numberOfDescreadedValues += 1;
    }

    previousValue = sumOfMeasurementWindow;
}

console.log('Solution part 2: number of increased values', numberOfIncreasedValues);

const endTime = new Date().getTime();
console.log('Execution time:', endTime - startTime, 'ms');