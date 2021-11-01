//TEST CODE
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const data3 = [1,2,3,4,5];
const results1 = takeUntil(data1, x => x < 0);
const results2 = takeUntil(data2, x => x === ',');
const results3 = takeUntil(data3, x => x < 0);

// console.log(results1);
// console.log(results2);
// console.log(results3);

console.log(assertArraysEqual(results1, [1,2,5,7,2]));
console.log(assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]));
console.log(assertArraysEqual(results3, [1,2,3,4,5]));
