const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return `Assertion Failed`;
  }
  return `Assertion Passed`;
};


const tail = function(arr) {
  return arr.slice(1);
};

//TEST CODE
const result = tail(["Hello", "Lighthouse", "Labs"]);
console.log(assertEqual(result.length, 2)); // ensure we get back two elements
console.log(assertEqual(result[0], "Lighthouse")); // ensure first element is "Lighthouse"
console.log(assertEqual(result[1], "Labs")); // ensure second element is "Labs"

/* Brainstorming
=== or == is unable to compare arrays, thus we need to break down the problem further
change code above to a for loop checking if elements are equal to one another. if no return assertion failed. If for loop runs fully run assertion passed outside of for loop
* talked with a mentor, I was not supposed to change it for the purpose of this module but here is the code anyways
if (actual.length !== expected.length) {
    return `🛑Assertion Failed: ${actual} !== ${expected}`;
  } else {
    for (let i = 0; i < actual.length; i++){
      if (actual[i] !== expected[i]){
        return `🛑Assertion Failed: ${actual} !== ${expected}`;
      }
    }
    return `✅Assertion Passed: ${actual} === ${expected}`;
  }
}
Test code
console.log(tail([0, 1, 2, 3]))
console.log(assertEqual(tail([1, 2, 3]), [2, 3]))
console.log(assertEqual(tail([0,1,2,3]), [2,3]))
*/