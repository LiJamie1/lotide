const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return `Assertion Failed`;
  }
  return `Assertion Passed`;
};

//END ASSERTEQUAL

const countLetters = function(str) {
  const letterCount = {};
  let strFormatted = str.toLowerCase().replace(/\W/g, '');
  //console.log(strFormatted)
  for (const char of strFormatted) {
    // console.log(char)
    letterCount[char] = letterCount[char] + 1 || 1;
  }
  return letterCount;
};

const test = "hello this is test a string";
const result = countLetters(test);
//TEST
console.log(assertEqual(result["i"], 3));
console.log(assertEqual(result["h"], 2));
console.log(assertEqual(result["t"], 4));
console.log(assertEqual(result["e"], 2));