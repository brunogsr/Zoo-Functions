const data = require('../data/zoo_data');

const isManager = (id) => {
  const managerCheck = data.employees.some((employee) => employee.managers.includes(id));
  console.log(managerCheck);
  return managerCheck;
};

const getRelatedEmployees = (managerId) => {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  } else {
    const managedIds = data.employees.filter((managedEmployee) => managedEmployee.managers
      .includes(managerId));
    return managedIds.map((managedEmployee) =>
      `${managedEmployee.firstName} ${managedEmployee.lastName}`);
  }
};

module.exports = { isManager, getRelatedEmployees };

// coletar todos os firstName e Lastname das pessoas com o "managerID" nas chaves "managers:"
// armazená-los em um array
// return com a concatenação de cada um repetidamente
