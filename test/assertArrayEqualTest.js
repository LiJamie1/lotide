const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual.js')

describe("#assertArraysEqual", function () {
  it("returns true for matching input and expected arrays", function() {
    const input = [1,2,3]
    const expected = [1,2,3]
    const result = assertArraysEqual(input, expected)
    assert.strictEqual(result, 'Assertion Passed')
  });
  it("returns false for mismatching input and expected arrays", function() {
    const input = [1,2,4]
    const expected = [1,2,3]
    const result = assertArraysEqual(input, expected)
    assert.strictEqual(result, 'Assertion Failed')
  });
});

