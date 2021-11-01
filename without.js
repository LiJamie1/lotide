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
// assertArraysEqual([1,2,3], [1,2,3])
// assertArraysEqual([1,2,3], [1,2])
// assertArraysEqual([1], [0])
// assertArraysEqual(['hello', 'world'], ['hello', 'world'])
//END OF TEST CODE

const without = function(words, remove) {
  const withoutArray = words.slice();
  for (let i = 0; i < withoutArray.length; i++) {
    if (withoutArray[i] === remove[0]) {
      withoutArray.shift(i);
      i--;
    }
  }
  console.log(withoutArray);
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

