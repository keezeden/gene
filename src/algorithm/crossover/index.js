import { Member } from '../../types';
import { random } from '../../utilities/algorithm';

const crossover = population => {
  const parents = population.reduce((rows, key, index) => {
    return (index % 2 == 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) && rows; // idk how this works
  }, []);

  const bred = parents.map(([parentX, parentY], index) => {
    const speedX = random(parentX.yv);
    const speedY = parentY.yv - speedX;

    const speed = speedX + speedY;
    return [
      new Member(5 * index * 2, 1000, 0, speed, {
        canvas: parentX.canvas,
        fitness: parentX.fitness,
      }),
      new Member(5 * index * 2 + 1, 1000, 0, speed, {
        canvas: parentX.canvas,
        fitness: parentX.fitness,
      }),
    ];
  });

  const crossed = bred.flat();

  return crossed;
};

export { crossover };
