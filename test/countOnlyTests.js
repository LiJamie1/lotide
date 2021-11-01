const chai = require('chai');
const assert = chai.assert;
const lotide = require('../index');

describe('#countOnly', function() {
  it('should return an object with a count of specified items from an input array', function() {
    const testOne = ['a', 'a', 'b', 'c'];
    const filter = {
      'a': true,
      'b': false,
      'c': true
    };
    const expected = {
      a: 2,
      c: 1
    };
    const result = lotide.countOnly(testOne, filter);
    assert.isTrue(lotide.eqObjects(result, expected));
  });
});