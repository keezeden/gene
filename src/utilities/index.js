const { times } = require('lodash');

const random = max => {
  return Math.floor(Math.random() * max);
};

const parent = () => {
  return { speed: random(3) };
};

const member = (parentX = parent(), parentY = parent()) => {
  const speed = (parentX.speed + parentY.speed) / 2;

  return {
    speed
  };
};

module.exports = { member, random, times };
