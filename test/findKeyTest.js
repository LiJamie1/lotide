const chai = require('chai');
const assert = chai.assert;
const lotide = require('../index');

describe('#findKey', function() {
  it('should return the key "noma" when a condition is specified', function() {
    const test1 = lotide.findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    }, x => x.stars === 2);
    assert.strictEqual(test1, "noma");
  });
  it('should return the key "name3" when a condition is specified', function() {
    const test2 = lotide.findKey({
      name1: "Jamie",
      name2: "Kevin",
      name3: "Rene",
      name4: "Paco"
    }, x => x === "Rene");
    assert.strictEqual(test2, "name3");
  });
});