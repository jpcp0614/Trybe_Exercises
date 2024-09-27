/*
* Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito),
* o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro
* é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela
* pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
* Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos,
* e quando não houver resposta ("N.A") não altera-se a contagem.
*/

const right_Answer = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const student_Answer = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const verification = (rightAnswer, studentAnswer, action) => {
  let count = 0;
  for (let i = 0; i < rightAnswer.length; i += 1) {
    const result = action(rightAnswer[i], studentAnswer[i]);
    count += result;
  };
  return `${count} respostas corretas`;
};

const notas = (rAnswer, sAnswer) => {
  if (rAnswer === sAnswer) return 1;
  if (sAnswer === 'N.A') {
    return 0;
  }
  return -0.5;
};

console.log(verification(right_Answer, student_Answer, notas));


