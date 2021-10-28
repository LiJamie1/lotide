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

// takeUntil
const takeUntil = function(arr, callback) {
  const results = [];
  for (let element of arr) {
    if (!(callback(element))) {
      results.push(element);
    } else {
      return results;
    }
  }
  return results;
};

//TEST CODE
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);
const data3 = [1,2,3,4,5];
const results3 = takeUntil(data3, x => x < 0);

console.log(assertArraysEqual(results1, [1,2,5,7,2]));
console.log(assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]));
console.log(assertArraysEqual(results3, [1,2,3,4,5]));