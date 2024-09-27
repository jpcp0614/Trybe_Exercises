const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const verifyLetter = (letter, names) => names.some((name) => name[0] === letter);
console.log(verifyLetter('W', listNames));


const grades = {
  portugues: 'Aprovado',
  matematica: 'Reprovado',
  ingles: 'Aprovado',
};

const verifyGrades = (studentGrades) => Object.values(studentGrades).every((grade) => grade === 'Aprovado');
console.log(verifyGrades(grades));