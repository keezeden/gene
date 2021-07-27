import { initialization, evaluation, selection, crossover, mutation } from '../../algorithm';
import { Canvas } from '../canvas';

class Simulation {
  constructor(size) {
    this.canvas = new Canvas();

    this.cycles = 0;
    this.population = initialization(size, this.canvas);
  }

  start() {
    this.generation();
  }

  strongest() {
    const [leader] = this.population.sort(({ fitness: a }, { fitness: b }) => b - a);

    console.warn('Strongest: ', leader);
  }

  evolve() {
    this.population = evaluation(this.population);
    this.population = selection(this.population);
    this.population = crossover(this.population);
    this.population = mutation(this.population);

    this.strongest();
  }

  simulate(callback) {
    const exit = this.population.every(member => member.y < 0);

    if (exit) return callback();
    requestAnimationFrame(() => this.animate.bind(this)(callback));
  }

  generation() {
    this.simulate(() => {
      this.evolve();
      return;
      this.generation();
    });
  }

  update() {
    this.population.forEach(member => member.update());
  }

  draw() {
    this.canvas.clear();
    this.update();
  }

  animate(callback) {
    this.draw();
    requestAnimationFrame(() => this.simulate.bind(this)(callback));
  }
}

export { Simulation };
