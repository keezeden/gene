import { initialization, evaluation, selection, crossover, mutation } from './src';
import { Canvas } from './src/types/canvas';
import { Member } from './src/types/member';
import { animate } from './src/utilities/animation';

// 1. Initialization
// 2. Evaluation
// 3. Selection
// 4. Crossover
// 5. Mutation

const simulate = () => {
  let population = initialization(100);

  for (var round = 0; round < 100; round++) {
    population = evaluation(population);
    population = selection(population);
    population = crossover(population);
    population = mutation(population);
    const [leader] = population.sort(({ fitness: a }, { fitness: b }) => b - a);
    console.log(`Population ${round + 1} leader:`, JSON.stringify(leader));
  }
};

const canvas = new Canvas();

const member = new Member(20, 50, { canvas });
const members = [member];

animate(canvas, members);
