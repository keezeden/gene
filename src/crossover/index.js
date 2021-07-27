import { random } from '../../utilities/algorithm';

const crossover = population => {
  const parents = population.reduce((rows, key, index) => {
    return (index % 2 == 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) && rows; // idk how this works
  }, []);

  const bred = parents.map(([parentX, parentY]) => {
    const speedX = random(parentX.speed);
    const speedY = parentY.speed - speedX;

    const speed = speedX + speedY;
    return [
      { speed, fitness: speed },
      { speed, fitness: speed },
    ];
  });

  const crossed = bred.flat();

  return crossed;
};

export { crossover };
