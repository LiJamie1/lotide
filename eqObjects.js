//assertEqual
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return `Assertion Failed`;
  }
  return `Assertion Passed`;
};

// assertArrayEqual
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

// eqObjects Function
const eqObjects = function(o1, o2) {
  if(Object.keys(o1).length !== Object.keys(o2).length) {
    return false;
  }
  for (const key in o1) {
    if (!(Array.isArray(o1[key]))) {
      if (o1[key] !== o2[key]){
        return false;
      };
    };
    if (!(eqArrays(o1[key], o2[key]))) {
      return false;
    };
  };
  return true;
};

// TEST CODE
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
// console.log(eqObjects(ab, ba))
const abc = {a: "1", b: "2", c: "3"}
// console.log(eqObjects(ab, abc))
// console.log(assertEqual(eqObjects(ab, ba), true))
// console.log(assertEqual(eqObjects(ab, abc), false))

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true
console.log(assertEqual(eqObjects(cd, dc), true))

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false
console.log(assertEqual(eqObjects(cd, cd2), true))