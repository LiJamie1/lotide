const assert = require('chai').assert;
const assertEqual = require('../assertEqual.js')
const eqArrays = require('../eqArrays.js')

describe('#eqArrays', function() {
  it('should return assertion passed if inputs for eqArrays are equal', function() {
    const input = [1,2,3];
    const expected = [1,2,3];
    const result = eqArrays(input, expected);
    assert.strictEqual(assertEqual(result, true), 'Assertion Passed')
  });
  it('should return assertion passed if inputs for eqArrays are not equal', function() {
    const input = [1,2,3];
    const expected = [1,2,4];
    const result = eqArrays(input, expected);
    assert.strictEqual(assertEqual(result, true), 'Assertion Failed')
  });
});