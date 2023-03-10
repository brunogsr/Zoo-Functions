const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, newAge) => {
  const animalCheck = data.species.find((species) => species.name === animal);
  const ageDataSpecies = animalCheck.residents.every((residents) => residents.age >= newAge);
  return ageDataSpecies;
};

getAnimalsOlderThan('otters');
// [10, 12, 2, 2]

// const ageCheck = animalCheck.filter((animalCheck) => animalCheck.newAge < animalCheck.age);
// console.log(ageCheck)
module.exports = getAnimalsOlderThan;
