const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  const filteredSpecies = data.species.filter((species) => ids.includes(species.id));
  return filteredSpecies;
};

module.exports = getSpeciesByIds;

getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce');
getSpeciesByIds(['0938aa23-f153-4937-9f88-4858b24d6bce', 'e8481c1d-42ea-4610-8e11-1752cfc05a46']);
