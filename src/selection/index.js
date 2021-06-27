const { times, random } = require('../utilities');

const selection = population => {
  // Roulette Wheel Selection strategy
  const roulette = population.map(member => times(member.fitness >= 1 ? member.fitness : 1, () => member)).flat();

  const selected = population.map(() => {
    // mapping over population for simplicity of length matching
    const pointer = random(roulette.length - 1);
    return roulette[pointer];
  });

  return selected;
};

module.exports = { selection };
