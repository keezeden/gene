const evaluation = population => {
  const evaluated = population.map(member => {
    const { speed } = member;

    return {
      ...member,
      fitness: speed // speed is trait directly corelated to fitness
    };
  });

  return evaluated;
};

module.exports = { evaluation };
