const chai = require('chai');
const assert = chai.assert;
const lotide = require('../index');


describe('#tail', function() {
  it("should return assertion passed if tail input is [1,2,3] returns [2,3]", function() {
    const testOne = [1,2,3];
    const result = lotide.tail(testOne);
    const expected = [2,3];
    assert.strictEqual(lotide.assertArraysEqual(result, expected), 'Assertion Passed');
  });
  it("should return assertion passed if tail input is ['Hello', 'World'] returns ['World']", function() {
    const testTwo = ['Hello', 'World'];
    const result = lotide.tail(testTwo);
    const expected = ['World'];
    assert.strictEqual(lotide.assertArraysEqual(result, expected), 'Assertion Passed');
  });
});
