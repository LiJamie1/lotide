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
    if ((Array.isArray(o1[key]))) {
      if (!(eqArrays(o1[key], o2[key]))) {
        return false;
      };
    };
    if (typeof o1[key] === 'object' && o1[key] !== null) {
      if (!eqObjects(o1[key], o2[key])) {
        return false;
      }
    } else if (o1[key] !== o2[key]){
      return false;
    };
  };
  return true;
};



//TEST CODE
// Flat Objects
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// const abc = {a: "1", b: "2", c: "3"}
// console.log(eqObjects(ab, ba)) // => true
// console.log(eqObjects(ab, abc))// => false
// console.log(assertEqual(eqObjects(ab, ba), true)) // => true
// console.log(assertEqual(eqObjects(ab, abc), false)) // => true

// Object with arrays
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// const cd2 = { c: "1", d: ["2", 3, 4] };
// eqObjects(cd, dc); // => true
// eqObjects(cd, cd2); // => false
// console.log(assertEqual(eqObjects(cd, dc), true)) // => true
// console.log(assertEqual(eqObjects(cd, cd2), true)) // => false

// Nested Objects
// console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })) // => true
// console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })) // => false
// console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })) // => false
console.log(assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true)) // => true
console.log(assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false)) // => false
console.log(assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false)) // => false
