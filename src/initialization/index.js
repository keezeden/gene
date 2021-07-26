import { member } from '../utilities/algorithm';

const initialization = size => {
  const population = [...new Array(size)].map((val, index) => member());

  return population;
};

export { initialization };
