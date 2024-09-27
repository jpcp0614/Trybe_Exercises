const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return ids.map(i => data.species.find(idAnimal => idAnimal.id === i));
};
console.log(getSpeciesByIds(data.species));

module.exports = getSpeciesByIds;