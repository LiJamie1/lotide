const takeUntil = function(arr, callback) {
  const results = [];
  for (let element of arr) {
    if (!(callback(element))) {
      results.push(element);
    } else {
      return results;
    }
  }
  return results;
};

module.exports = takeUntil;