const chai = require('chai');
const assert = chai.assert;
const lotide = require('../index');

describe('#findKeyByValue', function() {
  it('should return the key drama when given object and the specified value "the wire', function() {
    const showList = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    const value = "The Wire";
    const result = lotide.findKeyByValue(showList, value);
    assert.strictEqual(result, 'drama');
  });
  it('should return undefined when the value is not in the given object', function() {
    const showList = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    const value = "That '70s Show";
    const result = lotide.findKeyByValue(showList, value);
    assert.strictEqual(result, undefined);
  });
});