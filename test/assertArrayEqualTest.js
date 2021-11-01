const assertArraysEqual = require('../assertArraysEqual.js')

console.log(assertArraysEqual([1,2,3], [1,2,3]));
console.log(assertArraysEqual([1,2,3], [1,2]));
console.log(assertArraysEqual([1], [0]));
console.log(assertArraysEqual(['hello', 'world'], ['hello', 'world']));