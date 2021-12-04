const startTime = new Date().getTime();
const dayNumber = '04';

// load the file
const fs = require('fs');
const path = require('path');
const appData = fs.readFileSync(path.resolve(__dirname, `day-${dayNumber}.txt`), 'utf8').split('\n\n');

const drawnNumbers = appData[0].split(',');
appData.shift();

let bingoCards = new Array(appData.length);
const bingos = [];

// data mapping, create cards with all horizontal and all vertical lines in an array
for (let i = 0; i < appData.length; i += 1) {
    const lines = appData[i].split('\n');
    const verticalLines = [];
    const horizontalLines = [];

    for (let j = 0; j < lines.length; j += 1) {
        const horizontalLine = lines[j].split(' ').filter((a) => a);
        horizontalLines.push(horizontalLine);
    }

    for (let k = 0; k < 5; k += 1) {
        const verticalLine = [];

        for (let l = 0; l < horizontalLines.length; l += 1) {
            verticalLine.push(horizontalLines[l][k]);
        }

        verticalLines.push(verticalLine);
    }

    bingoCards[i] = horizontalLines.concat(verticalLines);
}

//
// bingo rounds
//

// loop through the drawnnumbers
for (let i = 0; i < drawnNumbers.length; i += 1) {
    const number = drawnNumbers[i];

    // loop through the cards
    for (let j = 0; j < bingoCards.length; j += 1) {

        // loop through the vertical and horizonal lines per card
        for (let k = 0; k < bingoCards[j].length; k += 1) {
            // remove drawn number from card
            bingoCards[j][k] = bingoCards[j][k].filter(item => item !== number);

            // when line is empty: BINGO!
            if (!bingoCards[j][k].length && !bingos.includes(j)) {
                bingos.push(j);

                // first bingo
                if (bingos.length === 1) {
                    calculateSolution(number, bingoCards[j], 'part1');
                }

                // last bingo
                if (bingos.length === bingoCards.length) {
                    const last = bingos[bingos.length - 1];
                    calculateSolution(number, bingoCards[last], 'part2');
                }
            }
        }
    }
}

function calculateSolution(start, array, part) {
    let leftOvers = [];
    let solution = 0;

    // merge lines
    for (let i = 0; i < array.length; i += 1) {  
        leftOvers = leftOvers.concat(array[i]);
    }

    // remove doubles
    leftOvers = [...new Set(leftOvers)];

    // sum of leftover numbers
    for (let j = 0; j < leftOvers.length; j += 1) {
        solution += parseInt(leftOvers[j], 10);
    }

    console.log(`solution ${part}:`, solution * parseInt(start, 10));
}

// Get endtime
const endTime = new Date().getTime();
console.log('Execution time:', endTime - startTime, 'ms');