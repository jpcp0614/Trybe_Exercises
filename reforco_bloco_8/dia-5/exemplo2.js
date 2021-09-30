function quantosParametros(...args) {
  console.log('parâmetros:', args);
  return `Você passou ${args.length} parâmetros para a função`
};

console.log(quantosParametros(2, 0, 8, 9));
console.log(quantosParametros('string', true, {}));


const sum = (...args) => args.reduce((acc, value) => acc + value, 0);
console.log(sum(2, 4, 10, 9, -40, 15));