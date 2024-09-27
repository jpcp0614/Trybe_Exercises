const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

// * Tente criar uma função que exiba as habilidades do objeto student.
// * Cada habilidade deve ser exibida no formato "Nome da habilidade, Nível: valor da chave referente à habilidade".

const skills = student => {
  const array = Object.keys(student);
  for (index in array) {
    console.log(`${array[index]}, Nível: ${student[array[index]]}`);
  };
};
skills(student1);