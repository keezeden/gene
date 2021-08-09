import { Member } from '../../types';
import { random } from '../../utilities/algorithm';
import { evaluate } from '../evaluation';

const mutation = population => {
  const mutated = population.map(member => {
    if (random(10) > 7) {
      // 20% mutation rate
      return evaluate(new Member(member.index));
    }

    return member;
  });
  return mutated;
};

export { mutation };
