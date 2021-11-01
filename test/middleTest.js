const middle = require('../middle.js')
const assertArraysEqual = require('../assertArraysEqual.js')

const testOne = [1,2,3,4,5,6];
const testTwo = [1,2,3,4,5];
console.log(middle(testOne));
console.log(middle(testTwo));
console.log(assertArraysEqual(testOne, [1,2,3,4,5,6]));
console.log(assertArraysEqual(testTwo, [1,2,3,4,5]));