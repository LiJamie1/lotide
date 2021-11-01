const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return `Assertion Failed`;
  }
  return `Assertion Passed`;
};


const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  for (let i = 0; i < arrayOne.length; i++) {
    if (Array.isArray(arrayOne[i]) && Array.isArray(arrayTwo[[i]])){
      if (!eqArrays(arrayOne[i], arrayTwo[i])) {
        return false;
      };
    } else if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    };
  }
  return true;
};

//TEST CODE
console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));// => true
console.log(assertEqual(eqArrays([1, 2, 4], [1, 2, 3]), true));// => false
console.log(assertEqual(eqArrays([], []), true)); // => true
console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true)); // => true
console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false)); // => true
console.log(assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true)); // => true