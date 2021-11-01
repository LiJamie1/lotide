const letterPositions = function(sentence) {
  const result = {};
  let str = sentence.toLowerCase().replace(/\W/g, '');
  for (let i = 0; i < str.length; i++) {
    if (!result[str[i]]) {
      result[str[i]] = [i];
    } else {
      result[str[i]].push(i);
    }
  }
  return result;
};

console.log(letterPositions('hello'))
module.exports = letterPositions;