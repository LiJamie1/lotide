// assertArrayEqual
const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
};

// eqObjects Function
const eqObjects = function(o1, o2) {
  if (Object.keys(o1).length !== Object.keys(o2).length) {
    return false;
  }
  for (const key in o1) {
    if (!(Array.isArray(o1[key]))) {
      if (o1[key] !== o2[key]) {
        return false;
      }
    }
    if (!(eqArrays(o1[key], o2[key]))) {
      return false;
    }
  }
  return true;
};

// assertObjEqual
const assertObjEqual = function(obj1, obj2) {
  if (eqObjects(obj1, obj2)) {
    return('Assertion Passed')
  }
  return ('Assertion Failed');
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(assertObjEqual(ab, ba));