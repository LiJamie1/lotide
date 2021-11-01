const assertEqual = require('../assertEqual.js')
const eqArrays = require('../eqArrays.js')

console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));// => true
console.log(assertEqual(eqArrays([1, 2, 4], [1, 2, 3]), true));// => false
console.log(assertEqual(eqArrays([], []), true)); // => true
console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true)); // => true
console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false)); // => true
console.log(assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true)); // => true