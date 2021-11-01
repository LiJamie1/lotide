const head = require('./head')
const tail = require('./tail')
const middle = require('./middle')
const assertArraysEqual = require('./assertArraysEqual')
const assertEqual = require('./assertEqual')
const eqArrays = require('./eqArrays')

//fix test documents
const assertObjEqual = require('./assertObjEqual')
const eqObjects = require('./eqObjects');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const letterPositions = require('./letterPositions');
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without');



module.exports = {
  head,
  tail,
  middle,
  assertArraysEqual,
  assertEqual,
  eqArrays,
  assertObjEqual,
  eqObjects,
  countOnly,
  countLetters,
  letterPositions,
  map,
  takeUntil,
  without
};