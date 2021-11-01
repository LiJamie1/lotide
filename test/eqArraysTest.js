const chai = require('chai');
const assert = chai.assert;
const lotide = require('../index');

describe('#eqArrays', function() {
  it('should return assertion passed if inputs for eqArrays are equal', function() {
    const input = [1,2,3];
    const expected = [1,2,3];
    const result = lotide.eqArrays(input, expected);
    assert.strictEqual(lotide.assertEqual(result, true), 'Assertion Passed')
  });
  it('should return assertion passed if inputs for eqArrays are not equal', function() {
    const input = [1,2,3];
    const expected = [1,2,4];
    const result = lotide.eqArrays(input, expected);
    assert.strictEqual(lotide.assertEqual(result, true), 'Assertion Failed')
  });
});