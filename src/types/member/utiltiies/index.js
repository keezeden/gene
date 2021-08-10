import { random, times } from 'lodash';

const makeGenes = () => {
  return times(1000, () => ({ x: random(-10, 10), y: random(-2, 8) }));
};

export { makeGenes };
