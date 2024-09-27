/*
* Crie uma função que receba uma frase e retorne qual a maior palavra.
* Exemplo:

* longestWord("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu'
*/

const biggestWord = (phrase) => phrase
  .split(' ')
  .sort((a, b) => b.length - a.length)[0]; // ordem decrescente, retornando o primeiro elemento do array

console.log(biggestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));

// ref.: https://pt.stackoverflow.com/questions/426836/como-pegar-a-maior-palavra-de-uma-string-em-javascript
// ref.: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach