const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// * 1)
// * Crie uma função para adicionar o turno da noite na lesson2.
// * Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
const addNewKey = (obj, key, value) => obj[key] = value;
addNewKey(lesson2, 'turno', 'manhã');
console.log(lesson2);


// * 2)
// * Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
const arrayKeys = obj => Object.keys(obj);
console.log(arrayKeys(lesson1));


// * 3)
// * Crie uma função para mostrar o tamanho de um objeto.
const arraySize = obj => Object.keys(obj).length;
console.log(arraySize(lesson3));


// * 4)
// * Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
const arrayValues = obj => Object.values(obj);
console.log(arrayValues(lesson1));


// * 5)
// * Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign.
// * Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3.
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log(allLessons);


// * 6)
// * Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
const getNumbersOfStudents = obj => {
  let total = 0;
  const array = Object.keys(obj);
  for (i in array) {
    total += obj[array[i]].numeroEstudantes;
  };
  return total;
};
console.log(getNumbersOfStudents(allLessons));


// * 7)
// * Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.
const getValueByNumber = (obj, key) => Object.values(obj)[key];
console.log(getValueByNumber(lesson2, 1));