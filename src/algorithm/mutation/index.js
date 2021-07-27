import { Member } from '../../types';
import { random } from '../../utilities/algorithm';
import { evaluate } from '../evaluation';

const mutation = population => {
  const mutated = population.map(member => {
    if (random(10) > 7) {
      // 20% mutation rate
      return evaluate(
        new Member(member.x, member.y, member.xv, member.yv - random(5), {
          canvas: member.canvas,
        })
      );
    }

    return member;
  });
  return mutated;
};

export { mutation };
