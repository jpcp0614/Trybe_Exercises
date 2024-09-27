const { encode, decode } = require('../src/exercicio4.js');

describe('Tests the encode and decode functions', () => {
  // 1
  it('if encode is a function', () => {
    expect(typeof encode).toStrictEqual('function');
  });
  it('if decode is a function', () => {
    expect(typeof decode).toStrictEqual('function');
  });

  // 2 e 4
  it('if vowels "ana" is converted to "1n1"', () => {
    expect(encode('ana')).toStrictEqual('1n1');
  });
  it('if vowels "ele" is converted to "2l2"', () => {
    expect(encode('ele')).toStrictEqual('2l2');
  });
  it('if vowels "xixi" is converted to "x3x3"', () => {
    expect(encode('xixi')).toStrictEqual('x3x3');
  });
  it('if vowels "ovo" is converted to "4v4"', () => {
    expect(encode('ovo')).toStrictEqual('4v4');
  });
  it('if vowels "tutu" is converted to "t5t5"', () => {
    expect(encode('tutu')).toStrictEqual('t5t5');
  });

  // 3 e 4
  it('if number "1n1" is converted to "ana"', () => {
    expect(decode('1n1')).toStrictEqual('ana');
  });
  it('if number "2l2" is converted to "ele"', () => {
    expect(decode('2l2')).toStrictEqual('ele');
  });
  it('if number "x3x3" is converted to "xixi"', () => {
    expect(decode('x3x3')).toStrictEqual('xixi');
  });
  it('if number "4v4" is converted to "ovo"', () => {
    expect(decode('4v4')).toStrictEqual('ovo');
  });
  it('if number "t5t5" is converted to "tutu"', () => {
    expect(decode('t5t5')).toStrictEqual('tutu');
  });

  // 5
  it('checks if the return from the encode function has the same number of characters', () => {
    expect(encode('string')).toStrictEqual('str3ng');
  });
  it('checks if the return from the decode function has the same number of characters', () => {
    expect(decode('4bj2ct')).toStrictEqual('object');
  });

});