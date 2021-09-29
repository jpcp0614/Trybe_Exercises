const collection = [1, 2, 3, 4, 5];
const numbers = [32, 15, 3, 2, -5, 56, 10];

//* collection
const sum1 = array => array.reduce((acc, number) => acc + number);
console.log(sum1(collection)); // 15

//* numbers
const sum2 = array => array.reduce(((acc, number) => acc + number), 10);
console.log(sum2(numbers));