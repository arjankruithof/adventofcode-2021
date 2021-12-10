const startTime = new Date().getTime();
const dayNumber = '10';

// load the file
const fs = require('fs');
const path = require('path');
const appData = fs.readFileSync(path.resolve(__dirname, `day-${dayNumber}.txt`), 'utf8').split('\n');

let scorePart1 = 0;
let scorePart2 = [];

let closedCharacters = [']','}',')','>'];
let openCharacters = ['[','{','(','<'];

for (let i = 0; i < appData.length; i += 1) {
    let openChars = [];

    for (let j = 0; j < appData[i].length; j += 1) {
        const char = appData[i].charAt(j);
        const lastChar = openChars[openChars.length - 1]; 

        if (char === '>' && lastChar === '<' || char === '}' && lastChar === '{' || char === ']' && lastChar === '['  || char === ')' && lastChar === '(') {
            openChars.pop();
        } else if (closedCharacters.indexOf(char) > -1 && openCharacters.indexOf(lastChar) > -1) {
            scorePart1 += getScore(char);
            break;
        } else {
            openChars.push(char);
        }

        // incomplete lines
        if (j === appData[i].length - 1) {
            let totalScore = 0;

            while (openChars.length > 0) {
                let currentOpen = openChars[openChars.length - 1];
    
                totalScore = totalScore * 5;
                totalScore += getScore(currentOpen);

                openChars.pop();
            }

            scorePart2.push(totalScore);
        }

    }
}

function getScore(char) {
    let addedScore = 0;

    switch (char) {
        case '>':
            addedScore = 25137;
            break;
        case '}':
            addedScore = 1197;
            break;
        case ']':
            addedScore = 57;
            break;
        case ')':
            addedScore = 3;
            break;
        case '<':
            addedScore = 4;
            break;
        case '{':
            addedScore = 3;
            break;
        case '[':
            addedScore = 2;
            break;
        case '(':
            addedScore = 1;
            break;
    }

    return addedScore;

}

// scorePart2.sort();

scorePart2.sort(function(a, b) {
    return a - b;
});

console.log('Solution part1:', scorePart1);
console.log('Solution part2:', scorePart2[Math.floor(scorePart2.length / 2)]);

// Get endtime
const endTime = new Date().getTime();
console.log('Execution time:', endTime - startTime, 'ms');