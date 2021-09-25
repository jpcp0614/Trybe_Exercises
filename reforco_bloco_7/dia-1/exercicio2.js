const oddsAndEvens = [13, 3, 4, 10, 7, 2, 0, -3, 18];

const ascendingOrder = (a, b) => {
  return a - b;
};
console.log(`Os números ${oddsAndEvens.sort(ascendingOrder)} se encontram ordenados de forma crescente!`);

// ref.: https://pt.stackoverflow.com/questions/9900/como-ordenar-um-array-por-valores