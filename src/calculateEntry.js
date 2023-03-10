const data = require('../data/zoo_data');

const reduceArr = (arr) => {
  const filteredByAge = arr.reduce((accumulator, element) => {
    const { age } = element;
    if (age < 18) { accumulator.child += 1; }
    if (age >= 18 && age < 50) { accumulator.adult += 1; }
    if (age >= 50) { accumulator.senior += 1; }
    return accumulator;
  }, { adult: 0, child: 0, senior: 0 });
  return filteredByAge;
};

const countEntrants = (entrants) => {
  if (!entrants || !entrants.length) { return 0; }
  const filteredByAge = reduceArr(entrants);
  return filteredByAge;
};

const calculateEntry = (entrants) => {
  if (!entrants || !entrants.length) { return 0; }
  const entrantsObj = countEntrants(entrants);
  const entrantsArr = Object.values(entrantsObj);
  const adultValor = entrantsArr[0] * data.prices.adult;
  const childValor = entrantsArr[1] * data.prices.child;
  const seniorValor = entrantsArr[2] * data.prices.senior;
  return adultValor + childValor + seniorValor;
};

calculateEntry([
  { name: 'Poggers', age: 5 },
  { name: 'Poggers', age: 5 },
  { name: 'Poggers', age: 5 },
  { name: 'Poggers', age: 18 },
  { name: 'Poggers', age: 18 },
  { name: 'Poggers', age: 50 },
]);

// const test = { child: 1, adult: 2, senior: 1 };
// const peopleCountArr = Object.values(test);
// console.log(peopleCountArr);

module.exports = { calculateEntry, countEntrants };

// child: 20.99,
// adult: 49.99,
// senior: 24.99,
