const { crossover } = require('./crossover');
const { evaluation } = require('./evaluation');
const { initialization } = require('./initialization');
const { mutation } = require('./mutation');
const { selection } = require('./selection');

module.exports = {
  initialization,
  crossover,
  selection,
  evaluation,
  mutation
};
