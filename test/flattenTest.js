const chai = require('chai');
const assert = chai.assert;
const lotide = require('../index');

describe('#flatten', function() {
  it('should return a flat array when given an a nested array', function() {
    const testOne = [1,2,3,[4,5],[6,[7]]];
    const expected = [1,2,3,4,5,6,7]
    const result =(lotide.flatten(testOne));
    assert.isTrue(lotide.eqArrays(result, expected));
  });
});