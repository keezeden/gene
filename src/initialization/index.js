const { member } = require('../utilities');

const initialization = size => {
  const population = [...new Array(size)].map((val, index) => member());

  return population;
};

module.exports = { initialization };
