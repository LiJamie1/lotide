const eqArrays = require('./eqArrays');

const eqObjects = function(o1, o2) {
  if (Object.keys(o1).length !== Object.keys(o2).length) {
    return false;
  }
  for (const key in o1) {
    if ((Array.isArray(o1[key]))) {
      if (!(eqArrays(o1[key], o2[key]))) {
        return false;
      }
    }
    if (typeof o1[key] === 'object' && o1[key] !== null) {
      if (!eqObjects(o1[key], o2[key])) {
        return false;
      }
    } else if (o1[key] !== o2[key]) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;