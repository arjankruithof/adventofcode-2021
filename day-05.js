const startTime = new Date().getTime();
const dayNumber = '05';

// load the file
const fs = require('fs');
const path = require('path');
const appData = fs.readFileSync(path.resolve(__dirname, `day-${dayNumber}.txt`), 'utf8').split('\n');

const allCoordinates = [];
let doubles = [];

// bruteforce all the things
createPoints(1);
doubles = [...new Set(doubles)];
console.log('solution part 1:', doubles.length);

createPoints(2);
doubles = [...new Set(doubles)];
console.log('solution part 2:', doubles.length);

function createPoints(index) {
    for (let i = 0; i < appData.length; i += 1) {
        const coordinates = appData[i].split(' -> ');
        const startX = parseInt(coordinates[0].split(',')[0], 10);
        const startY = parseInt(coordinates[0].split(',')[1], 10);
        const endX = parseInt(coordinates[1].split(',')[0]);
        const endY = parseInt(coordinates[1].split(',')[1]);

        if (index === 1) {
            if (startX === endX) {
                fillLines('x', startX, Math.min(startY, endY), Math.max(startY, endY));
            } else if (startY === endY) {
                fillLines('y', startY, Math.min(startX, endX), Math.max(startX, endX));
            }
        } else if (startX !== endX && startY !== endY) {
            if ((startX !== endX && startY !== endY)) {        
                fillDiagonals(startX, startY, endX, endY);
            }
        }
    }
}

function fillLines(type, constant, start, end) {
    for (let i = start; i < end + 1; i += 1) {
        const value = type === 'x' ? `${i},${constant}` : `${constant},${i}`;

        fillValue(value);
    }
}

function fillValue(value) {
    if (allCoordinates.includes(value)) {
        doubles.push(value);
    } else {
        allCoordinates.push(value);
    }
}

function fillDiagonals(startX, startY, endX, endY) {
    const direction = getDiagonalDirection(startX, startY, endX, endY);

    let x = startX;
    let y = startY;

    fillValue(`${x},${y}`);

    while(x !== endX && y !== endY) {
        switch (direction) {
            case 'lefttop':
                x -= 1;
                y -= 1;
                break;
            case 'rightbottom':
                x += 1;
                y += 1;
                break;
            case 'righttop':
                x += 1;
                y -= 1;
                break;
            case 'leftbottom':
                x -= 1;
                y += 1;
                break;
            default:
                console.log('direction not set');
        }

        fillValue(`${x},${y}`);
    }
}

function getDiagonalDirection(startX, startY, endX, endY) {
    let direction = '';

    if (startX < endX) {
        direction += 'right';
    }

    if (startX > endX) {
        direction += 'left';
    }

    if (startY > endY) {
        direction += 'top';
    }

    if (startY < endY) {
        direction += 'bottom';
    }

    return direction;
}

// Get endtime
const endTime = new Date().getTime();
console.log('Execution time:', endTime - startTime, 'ms');