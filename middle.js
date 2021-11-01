const middle = function(arr) {
  const arrCopy = arr.slice();
  if (arrCopy.length < 3) {
    return [];
  } else {
    const middle = Math.floor(arrCopy.length / 2);
    // console.log(middle)
    if (arrCopy.length % 2 === 0) {
      return arrCopy.slice(middle - 1, middle + 1);
    } else {
      return arrCopy.slice(middle, middle + 1);
    }
  }
};

module.exports = middle;