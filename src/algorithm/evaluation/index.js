const evaluate = member => {
  member.fitness = member.age;

  return member;
};

const evaluation = population => {
  const evaluated = population.map(evaluate);

  return evaluated;
};

export { evaluation, evaluate };
