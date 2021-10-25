const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return `🛑Assertion Failed: ${actual} !== ${expected}`;
  } else {
    return `✅Assertion Passed: ${actual} === ${expected}`;
  }
};

const head = function(arr){
  return arr[0]
}

//TEST CODE
console.log(assertEqual(head([5,6,7]), 5));
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));
