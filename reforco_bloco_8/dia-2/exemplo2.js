const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];

// sem find
let firstMultiplyOf5;
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] % 5 === 0) {
    firstMultiplyOf5 = numbers[i];
    break;
  };
};
console.log(firstMultiplyOf5);

// com find
const firstMultiply = numbers.find((number) => number % 5 === 0);
console.log(firstMultiply);