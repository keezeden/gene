import { random, times } from 'lodash';

const makeGenes = () => {
  return times(500, () => ({ x: random(-5, 5), y: random(-2, 8) }));
};

export { makeGenes };
