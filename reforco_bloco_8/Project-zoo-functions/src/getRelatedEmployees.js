const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees
    .some((manager) => manager.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  const verifyManager = isManager(managerId);
  if (verifyManager) {
    return data.employees
      .filter((manager) => manager.managers.includes(managerId))
      .map((arrayManagers) => `${arrayManagers.firstName} ${arrayManagers.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
};

module.exports = { isManager, getRelatedEmployees };