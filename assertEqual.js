// assert returns "Assertion failed" when an expected outcome is not met - diagnostic tool
//console.assert(1 === 1);
//console.assert(1 === 5);

const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return `Assertion Failed`;
  }
  return `Assertion Passed`;
};

module.exports = assertEqual;