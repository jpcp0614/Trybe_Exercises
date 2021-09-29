//* números pares
const numbers = [19, 21, 30, 3, 45, 22, 15];

const isEven = array => array.filter(number => number % 2 === 0);
console.log(isEven(numbers));


//* quem não pode dirigir
const objPeople = [
  { name: 'José', age: 21 },
  { name: 'Lucas', age: 19 },
  { name: 'Maria', age: 16 },
  { name: 'Gilberto', age: 18 },
  { name: 'Vitor', age: 15 },
];

const verifyAge = array => objPeople.filter(person => person.age < 18);
console.log(verifyAge(objPeople));


//* remover um elemento
const arrayMyStudents = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const removeStudent = (array, student) => array.filter((name) => name !== student);
console.log(removeStudent(arrayMyStudents, 'Ricardo'));