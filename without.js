const without = function(words, remove) {
  const withoutArray = words.slice();
  const index = withoutArray.indexOf(remove[0])
  if(index > -1){
    withoutArray.splice(index, 1)
  }
  return withoutArray;
};

const words = ["hello", "world", "lighthouse"];
const target = ['lighthouse'];
console.log(without(words, target))
module.exports = without;

