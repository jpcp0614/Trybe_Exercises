const myFizzBuzz = require('../src/exercicio3.js');

describe('Test the myFizzBuzz function', () => {
  it('check if it returns the expected value', () => {
    expect(myFizzBuzz(30)).toBe('fizzbuzz');
    expect(myFizzBuzz(9)).toBe('fizz');
    expect(myFizzBuzz(10)).toBe('buzz');
    expect(myFizzBuzz(17)).toBe(17);
    expect(myFizzBuzz('15')).toBe(false);
  });
});