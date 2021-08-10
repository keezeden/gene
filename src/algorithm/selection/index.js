import { times, random } from 'lodash';

const roulette = population => {
  // Roulette Wheel Selection strategy
  const roulette = population
    .map(member => times(member.fitness >= 1 ? member.fitness : 1, () => member))
    .flat();

  return population.map(() => {
    // mapping over population for simplicity of length matching
    const pointer = random(roulette.length - 1);
    return roulette[pointer];
  });
};

const tournament = population => {
  return population;
};

const selection = population => {
  switch (window.config.SELECTION_STRATEGY) {
    case 'ROULETTE':
      return roulette(population);
    case 'TOURNAMENT':
      return tournament(population);
    default:
      return roulette(population);
  }
};

export { selection };
