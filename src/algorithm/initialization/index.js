import { Member } from '../../types/member';

const initialization = size => {
  const population = [...new Array(size)].map((val, index) => new Member(index));

  return population;
};

export { initialization };
