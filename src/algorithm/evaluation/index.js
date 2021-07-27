import { Member } from '../../types';

const evaluate = member => {
  const fitness = member.yv;

  return new Member(member.x, member.y, member.xv, member.yv, { canvas: member.canvas, fitness });
};

const evaluation = population => {
  const evaluated = population.map(evaluate);

  return evaluated;
};

export { evaluation, evaluate };
