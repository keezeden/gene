import { random, times } from 'lodash';

const makeGenes = () => {
  return times(500, () => ({ x: 0, y: 10 }));
};

export { makeGenes };
