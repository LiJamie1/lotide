const chai = require('chai');
const assert = chai.assert;
const lotide = require('../index');

describe('#eqObjects', function() {
  it("should return true if the input flat objects are equal to one another", function() {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    const result = lotide.eqObjects(ab, ba);
    assert.isTrue(result);
  });
  it("should return false if the input flat objects are not equal to one another", function() {
    const ab = { a: "1", b: "2" };
    const abc = {a: "1", b: "2", c: "3"};
    const result = lotide.eqObjects(ab, abc);
    assert.isFalse(result);
  });
  it("should return true if the input objects with arrays are equal to one another", function() {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };
    const result = lotide.eqObjects(cd, dc);
    assert.isTrue(result);
  });
  it("should return false if the input objects with arrays are not equal to one another", function() {
    const cd = { c: "1", d: ["2", 3] };
    const cd2 = { c: "1", d: ["2", 3, 4] };
    const result = lotide.eqObjects(cd, cd2);
    assert.isFalse(result);
  });
  it("should return true if the input nested objects are equal to one another", function() {
    const objOne = { a: { z: 1 }, b: 2 };
    const objTwo = { a: { z: 1 }, b: 2 };
    const result = lotide.eqObjects(objOne, objTwo);
    assert.isTrue(result);
  });
  it("should return false if the input nested objects are not equal to one another", function() {
    const objOne = { a: { y: 0, z: 1 }, b: 2 };
    const objTwo = { a: { z: 1 }, b: 2 };
    const result = lotide.eqObjects(objOne, objTwo);
    assert.isFalse(result);
  });
});