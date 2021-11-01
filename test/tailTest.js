const assert = require('chai').assert;
const tail = require('../tail.js');
const assertEqual = require('../assertEqual.js')
const assertArraysEqual = require('../assertArraysEqual')


describe('#tail', function() {
  it("should return assertion passed if tail input is [1,2,3] returns [2,3]", function() {
    const testOne = [1,2,3];
    const result = tail(testOne);
    const expected = [2,3];
    assert.strictEqual(assertArraysEqual(result, expected), 'Assertion Passed')
  });
  it("should return assertion passed if tail input is ['Hello', 'World'] returns ['World']", function() {
    const testTwo = ['Hello', 'World'];
    const result = tail(testTwo);
    const expected = ['World'];
    assert.strictEqual(assertArraysEqual(result, expected), 'Assertion Passed')
  });
});
