const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return `Assertion Failed`;
  } else {
    return `Assertion Passed`;
  }
};

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

const allItems = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(allItems, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

console.log(assertEqual(result1["Jason"], 1));
console.log(assertEqual(result1["Karima"], undefined));
console.log(assertEqual(result1["Fang"], 2));
console.log(assertEqual(result1["Agouhanna"], undefined));
