const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return `🛑Assertion Failed: ${actual} !== ${expected}`;
  } else {
    return `✅Assertion Passed: ${actual} === ${expected}`;
  }
};

const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  } else {
    for (let i = 0; i < arrayOne.length; i++) {
      if (arrayOne[i] !== arrayTwo[i]) {
        return false;
      }
    }
    return true;
  }
};

//TEST CODE
console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));
console.log(assertEqual(eqArrays([1, 2, 4], [1, 2, 3]), true));
console.log(assertEqual(eqArrays([], []), true));
