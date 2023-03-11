const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (!employeeName) {
    return {};
  }
  const employee = data.employees.find(({ firstName, lastName }) =>
    (firstName === employeeName || lastName === employeeName));
  return employee;
};

console.log(getEmployeeByName('Wishart'));
// console.log(getEmployeeByName('Elser'));

module.exports = getEmployeeByName;
