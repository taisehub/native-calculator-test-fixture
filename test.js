const assert = require('node:assert/strict');
const {add} = require('calcassets-native-tests');

assert.equal(add(20, 22), 42);
console.log('TAP version 13');
console.log('ok 1 - arithmetic');
console.log('1..1');
