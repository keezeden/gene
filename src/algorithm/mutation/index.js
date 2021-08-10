import { Member } from '../../types';
import { evaluate } from '../evaluation';

const mutation = population => {
  return population.map(member => {
    if (Math.random() < window.config.MUTATION_RATE) {
      return evaluate(new Member(member.index));
    }

    return member;
  });
};

export { mutation };
