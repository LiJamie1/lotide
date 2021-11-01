// Probably Cheating
// const flatten = function(array) {
//   let flattenedArray = array.flat(Infinity)
//   console.log(array)
//   console.log(flattenedArray)
// }

const flatten = function(target) {
  let arr = target.slice();
  let flatArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      const result = flatten(arr[i]);
      flatArr = flatArr.concat(result);
    } else {
      flatArr.push(arr[i]);
    }
  }
  return flatArr;
};

module.exports = flatten;
