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
// assertArraysEqual([1,2,3], [1,2,3])
// assertArraysEqual([1,2,3], [1,2])
// assertArraysEqual([1], [0])
// assertArraysEqual(['hello', 'world'], ['hello', 'world'])
//END OF TEST CODE

const middle = function(arr) {
  const arrCopy = arr.slice();
  if (arrCopy.length < 3) {
    return [];
  } else {
    const middle = Math.floor(arrCopy.length / 2);
    // console.log(middle)
    if (arrCopy.length % 2 === 0) {
      console.log(arrCopy.slice(middle - 1, middle + 1));
    } else {
      console.log(arrCopy.slice(middle, middle + 1));
    }
  }
};

const testOne = [1,2,3,4,5,6];
const testTwo = [1,2,3,4,5];
middle(testOne);
middle(testTwo);
assertArraysEqual(testOne, [1,2,3,4,5,6]);
assertArraysEqual(testTwo, [1,2,3,4,5]);