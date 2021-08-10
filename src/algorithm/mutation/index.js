import { Member } from '../../types';
import { evaluate } from '../evaluation';

const mutation = population => {
  return population.map(member => {
    if (Math.random() < 0.03) {
      return evaluate(new Member(member.index));
    }

    return member;
  });
};

export { mutation };
