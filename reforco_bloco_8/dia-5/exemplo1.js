const cars = ['Gol', 'Focus', 'C3'];
const motors = ['Biz', 'R1'];
const vehicles = [...cars, ...motors];
console.log(vehicles);


const imc = (weight, hight) => (weight / (hight * hight)).toFixed(2);
const patientInfo = [55, 1.70];
console.log(imc(...patientInfo));


const randomNumbers = [85, 4, 3, 0, 152, 100, 98];
console.log(Math.min(...randomNumbers));


const people = {
  id: 101,
  name: 'Alysson',
  age: 25
};

const about = {
  address: 'Av. Getúlio Vargas, 1000',
  occupation: 'Developer'
};

const info = {...people, ...about};
console.log(info);