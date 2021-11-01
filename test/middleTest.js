const assert = require('chai').assert;
const middle = require('../middle.js')
const assertArraysEqual = require('../assertArraysEqual.js')



describe('#middle', function() {
  it("should return assertion passed if the middle of input [1,2,3,4] is [2,3]", function() {
    const testOne = [1,2,3,4];
    const midVal = [2,3];
    const result = middle(testOne);
    assert.strictEqual(assertArraysEqual(result, midVal), 'Assertion Passed');
  });
  it("should return assertion passed if the middle of input [1,2,3,4,5] is [3]", function() {
    const testTwo = [1,2,3,4,5];
    const midVal = [3];
    const result = middle(testTwo);
    assert.strictEqual(assertArraysEqual(result, midVal), 'Assertion Passed');
  });
  it("should return assertion failed if inputs are not equal", function() {
    const testThree = [1,2,3,4,5];
    const midVal = [2];
    const result = middle(testThree);
    assert.strictEqual(assertArraysEqual(result, midVal), 'Assertion Failed');
  });
})