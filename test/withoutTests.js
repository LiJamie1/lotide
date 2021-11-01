const chai = require('chai');
const assert = chai.assert;
const lotide = require('../index');

describe('#without', function() {
  it('should return an array with x removed when an array and a target word is input', function() {
    const words = ["hello", "world", "lighthouse"];
    const target = ['lighthouse'];
    const result = lotide.without(words, target);
    const expected = ["hello", "world"];
    assert.isTrue(lotide.eqArrays(result, expected));
  });
});