const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (!employeeName) {
    return {};
  }
  const employee = data.employees.find((employees) =>
    (employees.firstName === employeeName || employees.lastName === employeeName));
  return employee;
};

console.log(getEmployeeByName('Wishart'));
// console.log(getEmployeeByName('Elser'));

module.exports = getEmployeeByName;
