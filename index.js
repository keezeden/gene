import { initialization, evaluation, selection, crossover, mutation } from './src';
import { createShapeUtilities } from './src/utilities/drawing';

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
class Member {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.v = 1;
  }

  update() {
    this.x = this.x + this.v;
    this.y = this.y + this.v;
  }

  draw(triangle) {
    triangle(this.x, this.y, 20, 40);
  }
}

const element = document.getElementById('canvas');
const canvas = element.getContext('2d');

const { triangle, clear } = createShapeUtilities(canvas);

const member = new Member(20, 50);

const frame = () => {
  clear();
  member.update();
  member.draw(triangle);
  requestAnimationFrame(frame);
};
requestAnimationFrame(frame);
