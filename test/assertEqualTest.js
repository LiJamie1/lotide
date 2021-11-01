const chai = require('chai');
const assert = chai.assert;
const lotide = require('../index');


describe("#assertEqual", function() {
  it('should return assertion passed if inputs match', function() {
    const actual = 1
    const expected = 1
    assert.strictEqual(lotide.assertEqual(actual, expected), 'Assertion Passed')
  });
  it('should return assertion failed if inputs do not match', function() {
    const actual = 1
    const expected = 2
    assert.strictEqual(lotide.assertEqual(actual, expected), 'Assertion Failed')
  });
});