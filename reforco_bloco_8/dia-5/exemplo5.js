const person = {
  name: 'João',
  lastName: 'Jr',
  age: 34,
};

const { nationality = 'Brazilian' } = person;
console.log(nationality); // Brazilian


const position = [1.0, 2.4];
const [x, y, z = 1.5] = position;
console.log(z);