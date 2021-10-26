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

const assertArraysEqual = function(assertArrOne, assertArrTwo) {
  if (eqArrays(assertArrOne, assertArrTwo)) {
    console.log('Assertion Passed');
  } else {
    console.log('Assertion Failed');
  }
};

//TEST CODE
assertArraysEqual([1,2,3], [1,2,3]);
assertArraysEqual([1,2,3], [1,2]);
assertArraysEqual([1], [0]);
assertArraysEqual(['hello', 'world'], ['hello', 'world']);
