const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    const animalsPerSpecies = data.species.reduce((total, animal) => {
      total[animal.name] = animal.residents.length;
      return total;
    }, {});
    return animalsPerSpecies;
  };

  const namePerSpecies = data.species
    .find(({ name }) => name === animal.specie);

  const { residents } = namePerSpecies;

  const sexPerSpecies = residents.filter(({ sex }) => sex === animal.sex);

  return (animal.sex) ? sexPerSpecies.length : residents.length;
};

module.exports = countAnimals;