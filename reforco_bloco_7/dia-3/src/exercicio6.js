const hydrate = string => {
  const splitString = string
    .split('')
    .reduce((glassesOfWater, characterNumber) => { // executa a função de callback uma vez para cada elemento presente no array
      let characterParseInt = parseInt(characterNumber); // retornar um inteiro
      let checkCharacterNumber = isNaN(characterParseInt) === false; // verificar se é mesmo número
      if (checkCharacterNumber) return glassesOfWater + characterParseInt;
      return glassesOfWater;
    }, 0);

    const glasses = splitString === 1 ? 'copo' : 'copos';
    return `${splitString} ${glasses} de água`;
};

module.exports = hydrate;

// ref.: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// ref.: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/parseInt
// ref.: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/isNaN