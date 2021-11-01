const chai = require('chai');
const assert = chai.assert;
const lotide = require('../index');

describe('#countLetters', function() {
  it('should return an object of a letter count of a given string, eqObjects should return true if result and expected are equal', function() {
    const string = 'hello';
    const result = lotide.countLetters(string);
    const expected = {
      h: 1,
      e: 1,
      l: 2,
      o: 1
    };
    assert.isTrue(lotide.eqObjects(result, expected));
  });
});