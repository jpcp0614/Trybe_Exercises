//* 1
const numbers = [1, 2, 3, 4, -5];

const negativeNumbers = numbers.map(number => number > 0 ? number * (-1) : number);
console.log(negativeNumbers);


//* 2
const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const list = (listProducts, listPrices) => listProducts.map((prod, index) => (
  { [prod]: listPrices[index]}
  ));
console.log(list(products, prices));