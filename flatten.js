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

// //TEST CODE
// assertArraysEqual([1,2,3], [1,2,3]);
// assertArraysEqual([1,2,3], [1,2]);
// assertArraysEqual([1], [0]);
// assertArraysEqual(['hello', 'world'], ['hello', 'world']);
// //END TEST

// Probably Cheating
// const flatten = function(array) {
//   let flattenedArray = array.flat(Infinity)
//   console.log(array)
//   console.log(flattenedArray)
// }

const flatten = function(target) {
  let arr = target.slice();
  let flatArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      const result = flatten(arr[i]);
      flatArr = flatArr.concat(result);
    } else {
      flatArr.push(arr[i]);
    }
  }
  return flatArr;
};

// TEST CODE
const target = [1,2,3,[4,5],[6,[7]]];
console.log(flatten(target));
