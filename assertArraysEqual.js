const eqArrays = require('./eqArrays.js')

const assertArraysEqual = function(assertArrOne, assertArrTwo) {
  if (eqArrays(assertArrOne, assertArrTwo)) {
    return 'Assertion Passed';
  }
  return 'Assertion Failed';
};

module.exports = assertArraysEqual;