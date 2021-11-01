const eqObjects = require('./eqObjects')

// assertObjEqual
const assertObjEqual = function(obj1, obj2) {
  if (eqObjects(obj1, obj2)) {
    return ('Assertion Passed');
  }
  return ('Assertion Failed');
};

module.exports = assertObjEqual;