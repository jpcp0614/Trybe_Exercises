//* 1
const resultadoFinal1 = resultado => console.log(resultado);

const funcSoma1 = (num1, num2) => num1 + num2;

const resultadoSoma = funcSoma1(5, -18);
resultadoFinal1(resultadoSoma);


//* 2
const resultadoFinal2 = resultado => console.log(resultado);

const funcSoma2 = (num1, num2) => {
  let soma = num1 + num2;
  resultadoFinal2(soma);
};

funcSoma2(5, -18);

//* 3
const resultadoFinal3 = resultado => console.log(resultado);

const funcSoma3 = (num1, num2, callback) => {
  let soma = num1 + num2;
  callback(soma);
};

funcSoma3(5, -18, resultadoFinal3);