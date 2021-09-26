// Project Playground Functions
/*
const encode = string => {
  let wordEncode = string.replace(/a/g, '1')
    .replace(/e/g, '2')
    .replace(/i/g, '3')
    .replace(/o/g, '4')
    .replace(/u/g, '5');
  return wordEncode;
};

const decode = string => {
  let wordDecode = string.replace(/1/g, 'a')
    .replace(/2/g, 'e')
    .replace(/3/g, 'i')
    .replace(/4/g, 'o')
    .replace(/5/g, 'u');
  return wordDecode;
};
*/
// ref.: map:  https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// ref.: join: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/join
// ref.: mapString: https://app.betrybe.com/course/fundamentals/introducao-a-javascript-es6-e-testes-unitarios/primeiros-passos-no-jest-gabaritos/solutions/218ad9d8-6b7a-47c9-8761-3952ef89e5f0/conteudos/c067bcbf-2209-4281-bbac-ceafcba5d0be?use_case=calendar

const mapString = (objectMap, string) => {
  const splitString = string.split(''); // transformar a string num array
  const mappedArray = splitString.map((character) => objectMap[character] ? objectMap[character] : character);
  // se o objectMap tiver a o valor(caracter), ele retorna a chave...se não, retorna o próprio caracter
  return mappedArray.join('');
};

const encode = string => {
  const map = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5
  };
  return mapString(map, string);
};

const decode = string => {
  const map = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u'
  };
  return mapString(map, string);
};

const functions = { encode, decode };
module.exports = functions;

