const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (let i = 0; i < allItems.length; i++) {
    if (itemsToCount[allItems[i]]) {
      results[allItems[i]] = results[allItems[i]] + 1 || 1;
    }
  }
  console.log(results);
  return results;
};

module.exports = countOnly;