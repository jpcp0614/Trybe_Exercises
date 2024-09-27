const sum1 = require('../src/sum1');
test('sum two values', () => {
  expect(sum1(1,3)).toBe(4);
});