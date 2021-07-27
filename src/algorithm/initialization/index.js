import { Member } from '../../types/member';

const initialization = (size, canvas) => {
  const population = [...new Array(size)].map(
    (val, index) => new Member(25 * index, 800, 0, 0, { canvas })
  );

  return population;
};

export { initialization };
