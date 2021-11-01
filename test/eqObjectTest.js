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
// console.log(assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true)); // => true
// console.log(assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false)); // => false
// console.log(assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false)); // => false