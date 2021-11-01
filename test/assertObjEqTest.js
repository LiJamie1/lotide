const chai = require('chai');
const assert = chai.assert;
const lotide = require('../index');


describe('#assertObjEqual', function() {
  it('should return Assertion Passed if the input objects are equal', function() {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    const result = lotide.eqObjects(ab, ba);
    assert.isTrue(result)
  });
  it('should return Assertion failed if the input objects are equal', function() {
    const ab = { a: "2", b: "1" };
    const ba = { b: "2", a: "1" };
    const result = lotide.eqObjects(ab, ba);
    assert.isFalse(result)
  });
});