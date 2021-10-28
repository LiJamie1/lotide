// assertArrayEq
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

// map

const map = function(arr, callback) {
  const results = [];
  for (let item of arr) {
    results.push(callback(item));
  }
  return results;
};

//TEST CODE
const words = ["ground", "control", "to", "major", "tom"];
const test2 = ["Ground", "Control", "to", "Major", "Tom"];
const test3 = [10, "twenty", 30, "FORTY", 50];

const results1 = map(words, word => word[0]);
const results2 = map(test2, item => item[0]);
const results3 = map(test3, item1 => item1[0]);
// console.log(results1);
console.log(assertArraysEqual(results1, ["g", "c", "t", 'm', 't']));
console.log(assertArraysEqual(results2, ["G", "C", "t", 'M', 'T']));
console.log(assertArraysEqual(results3, [undefined, "t", undefined, 'F', undefined]));