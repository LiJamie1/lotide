const countLetters = function(str) {
  const letterCount = {};
  let strFormatted = str.toLowerCase().replace(/\W/g, '');
  //console.log(strFormatted)
  for (const char of strFormatted) {
    // console.log(char)
    letterCount[char] = letterCount[char] + 1 || 1;
  }
  return letterCount;
};

module.exports = countLetters;