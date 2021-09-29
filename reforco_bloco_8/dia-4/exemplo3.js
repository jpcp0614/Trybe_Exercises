//* maior número
const numbers1 = [-50, 85, -30, 3, 15];

const higherNumber = numbers1.reduce(((number, bigger) => number >= bigger ? number : bigger), 0);
console.log(higherNumber);


// * somar números pares
const numbers2 = [18, 19, 23, 53, 4, 5, 76, 23, 54];

//* reduce
const sumPair = numbers2.reduce(((number, value) => (value % 2 === 0) ? number + value : number), 0);
console.log(sumPair);

//* filter e reduce
const pair = number => number % 2 === 0;
const sum = (number, value) => number + value; 
const sumPairWithFilterReduce = array => array.filter(pair).reduce(sum);
console.log(sumPairWithFilterReduce(numbers2));

//* juntando
const sumFilterReduce = array => array
  .filter((number) => number % 2 === 0)
  .reduce(((acc, value) => acc + value), 0);
console.log(sumFilterReduce(numbers2));