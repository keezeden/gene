const { initialization, evaluation, selection, crossover, mutation } = require('./src');

// 1. Initialization
// 2. Evaluation
// 3. Selection
// 4. Crossover
// 5. Mutation

let population = initialization(100);

for (var round = 0; round < 100; round++) {
  population = evaluation(population);
  population = selection(population);
  population = crossover(population);
  population = mutation(population);
  const [leader] = population.sort(({ fitness: a }, { fitness: b }) => b - a);
  console.log(`Population ${round + 1} leader:`, JSON.stringify(leader));
}
