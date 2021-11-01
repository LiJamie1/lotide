const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return `Assertion Failed`;
  } else {
    return `Assertion Passed`;
  }
};

//END ASSERTEQUAL

const findKeyByValue = function(object, value) {
  const keys = Object.keys(object);
  // console.log(objKeys)
  for (let i = 0; i < keys.length; i++) {
    if (object[keys[i]] === value) {
      // console.log(objKeys[i])
      return keys[i];
    }
  }
};

//TEST CODE
const map = {"first" : "1", "second" : "2"};
console.log(findKeyByValue(map,"2"));

// ASSERTEQUAL TEST
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"));
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined));
