const chai = require('chai');
const assert = chai.assert;
const lotide = require('../index');

describe('#letterPositions', function() {
  it('shoud return positions of letters in a string.', function() {
    const test = "hello";
    const expected = {
      h: [0],
      e: [1],
      l: [2,3],
      o: [4]
    };
    const result = lotide.letterPositions(test);
    assert.isTrue(lotide.eqObjects(result, expected));
  });
});

