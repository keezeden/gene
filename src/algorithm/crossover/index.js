import { Member } from '../../types';
import { random } from 'lodash';

const crossover = population => {
  const parents = population.reduce((rows, key, index) => {
    return (index % 2 == 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) && rows; // idk how this works
  }, []);

  const bred = parents.map(([parentX, parentY]) => {
    const crosspoint = random(parentX.genes.length);

    const first = parentX.genes.slice(0, crosspoint);
    const second = parentY.genes.slice(crosspoint, -1);

    const firstGenes = [...first, ...second];
    const secondGenes = [...second, ...first];

    const childX = new Member(parentX.index, firstGenes);
    const childY = new Member(parentY.index, secondGenes);

    return [childX, childY];
  });

  return bred.flat();
};

export { crossover };
