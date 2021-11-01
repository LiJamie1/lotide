const without = function(words, remove) {
  const withoutArray = words.slice();

  for (let i = 0; i < words.length; i++) {
    if (words[i] === remove[0]){
      withoutArray.splice(i, 1)
    }
  }
  return withoutArray;
};

// const words = ["hello", "lighthouse", "world"];
// const target = ['lighthouse'];
// console.log(without(words, target))
module.exports = without;

