const { random } = require('../utilities');

const mutation = population => {
  const mutated = population.map(member => {
    if (random(10) > 7) {
      // 20% mutation rate
      return { ...member, speed: member.speed + random(2) };
    }

    return member;
  });
  return mutated;
};

module.exports = { mutation };
