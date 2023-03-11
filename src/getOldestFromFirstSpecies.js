const { species, employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (selectedId) => {
  const firstAnimal = employees.find(({ id }) => id === selectedId).responsibleFor[0];
  const residentsAnimals = species.find(({ id }) => id === firstAnimal).residents;
  const oldAnimal = residentsAnimals.reduce((animalVelho, animalAtual) =>
    (animalVelho.age < animalAtual.age ? animalAtual : animalVelho));
    // if (animalVelho.age < animalAtual.age) {
    //   return animalAtual;
    // }
    // return animalVelho;
  return Object.values(oldAnimal);
};

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;
