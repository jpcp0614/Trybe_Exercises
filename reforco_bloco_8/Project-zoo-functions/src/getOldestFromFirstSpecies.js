const { species, employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');


function getOldestFromFirstSpecies(id) {
  const arrayEmployee = employees.find(employee => employee.id === id);
  const idSpecie = arrayEmployee.responsibleFor[0];
  const arraySpecie = species.find(specie => specie.id === idSpecie);
  const oldestResident = arraySpecie.residents
    .reduce((oldest, resident) => {
      if (resident.age > oldest.age) return resident;
      return oldest;
    });
    return [oldestResident.name, oldestResident.sex, oldestResident.age];
};

module.exports = getOldestFromFirstSpecies;

// ref.: consulta: https://github.com/tryber/sd-015-b-project-zoo-functions/blob/Samuel-Silva-zoo-functions-project/src/getOldestFromFirstSpecies.js