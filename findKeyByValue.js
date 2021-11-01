const findKeyByValue = function(object, value) {
  const keys = Object.keys(object);
  // console.log(objKeys)
  for (let i = 0; i < keys.length; i++) {
    if (object[keys[i]] === value) {
      // console.log(objKeys[i])
      return keys[i];
    }
  }
};

module.exports = findKeyByValue;