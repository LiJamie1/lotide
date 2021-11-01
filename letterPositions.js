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
//END ASSERTARRAYSEQUAL

const letterPositions = function(sentence) {
  const result = {};
  let str = sentence.toLowerCase().replace(/\W/g, '');
  for (let i = 0; i < str.length; i++) {
    if (!result[str[i]]) {
      result[str[i]] = [i];
    } else {
      result[str[i]].push(i);
    }
  }
  return result;
};

const test = "Hello thIs is test A strIng";
const check = letterPositions(test);

// TESTCODE
assertArraysEqual(check['h'], [0, 6]);