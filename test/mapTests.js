//TEST CODE
const words = ["ground", "control", "to", "major", "tom"];
const test2 = ["Ground", "Control", "to", "Major", "Tom"];
const test3 = [10, "twenty", 30, "FORTY", 50];

const results1 = map(words, word => word[0]);
const results2 = map(test2, item => item[0]);
const results3 = map(test3, item1 => item1[0]);
// console.log(results1);
console.log(assertArraysEqual(results1, ["g", "c", "t", 'm', 't']));
console.log(assertArraysEqual(results2, ["G", "C", "t", 'M', 'T']));
console.log(assertArraysEqual(results3, [undefined, "t", undefined, 'F', undefined]));