//* 1. Dada uma matriz, transforme em um array.
const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  return arrays.reduce(((acc, value) => acc.concat(value)), []);
};
console.log(flatten());

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);

// ref.: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/concat