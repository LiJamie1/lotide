// assertEqual
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return `Assertion Failed`;
  }
  return `Assertion Passed`;
};

// find key

const findKey = function(obj, callback) {
  for (const key in obj) {
    if (callback(obj[key])) {
      return key;
    }
  }
};

//TEST CODE
const test1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"
console.log(assertEqual(test1, "noma"));

const test2 = findKey({
  name1: "Jamie",
  name2: "Kevin",
  name3: "Rene",
  name4: "Paco"
}, x => x === "Rene");
console.log(assertEqual(test2, "name3"));