const data = require('../data/zoo_data');

const countAnimals = (animals) => {
  const speciesObj = data.species;
  // const selectedAnimal = data.species.find((species) => species.name === animal);
  if (!animals) {
    const animais = speciesObj.reduce((accumulator, especie) => {
      accumulator[especie.name] = especie.residents.length;
      return accumulator;
    }, {});
    return animais;
  }
  const selectedAnimal = speciesObj.find((animaisTotais) =>
    animaisTotais.name === animals.species);
  const animalsWithSex = selectedAnimal.residents.filter((element) =>
    element.sex === animals.sex);
  if (!animals.sex) {
    return selectedAnimal.residents.length;
  }
  console.log(animalsWithSex.length);
  return animalsWithSex.length;
};
countAnimals({ species: 'giraffes', sex: 'female' });

module.exports = countAnimals;
