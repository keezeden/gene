import { Member } from '../../types/member';

const initialization = (size, canvas) => {
  const population = [...new Array(size)].map((val, index) => new Member(10 * index + 700, 900));

  return population;
};

export { initialization };
