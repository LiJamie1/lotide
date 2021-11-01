const chai = require('chai');
const assert = chai.assert;
const lotide = require('../index');

describe('#takeUntil', function() {
  it('should return an array of items from an array until a condition is fulfilled', function() {
    const testOne = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const expected = [1,2,5,7,2];
    const result = lotide.takeUntil(testOne, x => x < 0);
    assert.isTrue(lotide.eqArrays(result, expected));
  });
});