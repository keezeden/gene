const evaluate = member => {
  member.fitness = member.age;

  return member;
};

const evaluation = population => {
  return population.map(evaluate);
};

export { evaluation, evaluate };
