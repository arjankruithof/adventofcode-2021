// Get starttime
const startTime = new Date().getTime();
const dayNumber = '01';

// load the file
const fs = require('fs');
const path = require('path');
const appData = fs.readFileSync(path.resolve(__dirname, `day-${dayNumber}.txt`), 'utf8').split('\n');
console.log('appData:', appData);

// here comes the magic
// here comes the magic
// here comes the magic
// here comes the magic

// Get endtime
const endTime = new Date().getTime();

// Get execution time
console.log('Execution time:', endTime - startTime, 'ms');