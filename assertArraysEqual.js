const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(assertArrOne, assertArrTwo) {
  if (eqArrays(assertArrOne, assertArrTwo)) {
    return 'Assertion Passed';
  }
  return 'Assertion Failed';
};

//TEST CODE
console.log(assertArraysEqual([1,2,3], [1,2,3]));
console.log(assertArraysEqual([1,2,3], [1,2]));
console.log(assertArraysEqual([1], [0]));
console.log(assertArraysEqual(['hello', 'world'], ['hello', 'world']));
//END TEST