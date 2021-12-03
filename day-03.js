const startTime = new Date().getTime();
const dayNumber = '03';

// load the file
const fs = require('fs');
const path = require('path');
const appData = fs.readFileSync(path.resolve(__dirname, `day-${dayNumber}.txt`), 'utf8').split('\n');

// part 1
let leastBytes = '';
let mostBytes = '';
const itemLength = appData[0].length;

for (let i = 0; i < itemLength; i += 1) {
    let amountOfZero = 0;
    let amountOfOne = 0;

    for (let j = 0; j < appData.length; j += 1) {
        if (appData[j].charAt(i) === '0') {
            amountOfZero += 1;
        } else {
            amountOfOne += 1;
        }
    }

    if (amountOfZero > amountOfOne) {
        mostBytes += '1';
        leastBytes += '0';
    } else {
        mostBytes += '0';
        leastBytes += '1';
    }
}

console.log('solution part 1:', parseInt(mostBytes, 2) * parseInt(leastBytes, 2));

// part 2
let output = [];

for (let index = 0; index < 2; index += 1) {
    let i = 0;
    let filteredArray = appData;

    while (filteredArray.length > 1) {
        let amountOfZero = 0;
        let amountOfOne = 0;
        let checkFor = 0;

        for (let j = 0; j < filteredArray.length; j += 1) {
            if (filteredArray[j].charAt(i) === '0') {
                amountOfZero += 1;
            } else {
                amountOfOne += 1;
            }
        }

        if (index === 0) {
            checkFor = amountOfOne >= amountOfZero ? '1' : '0';
        } else {
            checkFor = amountOfZero <= amountOfOne ? '0' : '1';
        }

        filteredArray = filteredArray.filter(item => item.charAt(i) !== checkFor);

        i += 1;
    }

    output.push(parseInt(filteredArray[0], 2));
}

console.log('solution part 2:', output[0] * output[1]);

// Get endtime
const endTime = new Date().getTime();
console.log('Execution time:', endTime - startTime, 'ms');