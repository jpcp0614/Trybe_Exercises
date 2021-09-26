const sum = require('../src/exercicio1');

describe('Test the sum function', () => {
  it('Must return the sum result', () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);
  });
  it('Should raise an error if it receives a string as a parameter', () => {
    expect(() => sum(4, '5')).toThrowError();
    expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
  });
});