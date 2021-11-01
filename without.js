const without = function(words, remove) {
  const withoutArray = words.slice();
  for (let i = 0; i < withoutArray.length; i++) {
    if (withoutArray[i] === remove[0]) {
      withoutArray.shift(i);
      i--;
    }
  }
  console.log(withoutArray);
};

module.exports = without;

