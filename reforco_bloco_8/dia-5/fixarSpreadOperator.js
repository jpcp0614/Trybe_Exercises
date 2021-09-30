// Faça uma lista com as suas frutas favoritas
const specialFruit = ['maçã', 'banana', 'manga'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['creme de leite', 'mamão', 'laranja'];

const fruitSalad = (fruit, additional) => {
  const fruitSalad = [...fruit, ...additional];
  return fruitSalad;
};

console.log(fruitSalad(specialFruit, additionalItens));