const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const child = entrants
    .filter((entrant) => entrant.age < 18).length;
  const adult = entrants
    .filter((entrant) => entrant.age >= 18 && entrant.age < 50).length;
  const senior = entrants
    .filter((entrant) => entrant.age >= 50).length;
  return { child, adult, senior };
};

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;

  const ages = countEntrants(entrants);
  const children = ages.child * data.prices.child;
  const adults = ages.adult * data.prices.adult;
  const seniors = ages.senior * data.prices.senior;
  return children + adults + seniors;
};

module.exports = { calculateEntry, countEntrants };