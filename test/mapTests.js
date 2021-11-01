const chai = require('chai');
const assert = chai.assert;
const lotide = require('../index');

describe('#map', function() {
  it("should return an array of results based on the callback condition an the input array", function() {
    const words = ["ground", "control", "to", "major", "tom"];
    const result = lotide.map(words, word => word[0]);
    const expected = ['g', 'c', 't', 'm', 't'];
    assert.isTrue(lotide.eqArrays(result, expected));
  });
});