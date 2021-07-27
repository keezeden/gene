import { Member } from '../../types/member';

const initialization = (size, canvas) => {
  const population = [...new Array(size)].map(
    (val, index) => new Member(5 * index, 1000, 0, -10, { canvas })
  );

  return population;
};

export { initialization };
