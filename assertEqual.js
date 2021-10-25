// assert returns "Assertion failed" when an expected outcome is not met - diagnostic tool
//console.assert(1 === 1);
//console.assert(1 === 5);

const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return `🛑Assertion Failed: ${actual} !== ${expected}`;
  } else {
    return `✅Assertion Passed: ${actual} === ${expected}`;
  }
};

//TEST CODE
console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertEqual(1, 1));
console.log(assertEqual("hello", "world"));
console.log(assertEqual(100, 100));