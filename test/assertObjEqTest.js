const assertObjEqual = require('../assertObjEqual')

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(assertObjEqual(ab, ba));