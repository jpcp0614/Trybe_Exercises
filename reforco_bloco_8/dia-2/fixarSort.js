const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const ascendingOrderOfAge1 = arrayPeople => arrayPeople.sort((personA, personB) => personA.age - personB.age);
const ascendingOrderOfAge2 = arrayPeople => arrayPeople.sort((personA, personB) => personB.age - personA.age);
console.log(ascendingOrderOfAge1(people));
console.log(ascendingOrderOfAge2(people));