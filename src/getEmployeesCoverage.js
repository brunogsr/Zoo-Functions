const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getEmployee = (parameterObj) => {
  const employee = employees.find(({ firstName, lastName, id }) =>
    (firstName === parameterObj.name
    || lastName === parameterObj.name || id === parameterObj.id));
  if (!employee) {
    throw new Error('Informações inválidas');
  }
  return employee;
};

// console.log(getEmployee({ name: 'Sharonda' }));

const getFullName = (employee) => `${employee.firstName} ${employee.lastName}`;

// getFullName({ name: 'Sharonda' });

const filteredAnimals = (idsArr) => {
  const filteredSpecies = species.filter(({ id }) =>
    idsArr.includes(id));
  return filteredSpecies;
};

// console.log(getSpeciesByIds(['01422318-ca2d-46b8-b66c-3e9e188244ed',
//   'e8481c1d-42ea-4610-8e11-1752cfc05a46']));
const responseConstructor = (employeeObj) => {
  const filterAnimals = filteredAnimals(employeeObj.responsibleFor);
  const resultadoFinal = {
    id: employeeObj.id,
    fullName: getFullName(employeeObj),
    species: filterAnimals.map(({ name }) => name),
    locations: filterAnimals.map(({ location }) => location),
  };
  return resultadoFinal;
};

const getEmployeesCoverage = (parameterObj) => {
  if (parameterObj) {
    const employeeObj = getEmployee(parameterObj);
    return responseConstructor(employeeObj);
  }
  const resultado = employees.map((employee) => (responseConstructor(employee)));
  return resultado;
};

console.log(getEmployeesCoverage({ name: 'Spry' }));

module.exports = getEmployeesCoverage;

// FINALMENTE!!!!!!!!!!!! //////////////////////////
