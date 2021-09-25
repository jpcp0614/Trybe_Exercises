/*
* Crie uma função que receba um número e retorne seu fatorial.
* Na matemática, o fatorial de um número não negativo N, com a notação N!,
* é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
*/

const factorial = (number) => {
  if (number < 0) return `${number} é negativo!`;
    return number === 0 ? 1 : number * factorial(number - 1);
};
console.log(`Resultado: ${factorial(-5)}`);