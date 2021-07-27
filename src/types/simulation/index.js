import { initialization, evaluation, selection, crossover, mutation } from '../../algorithm';
import { Canvas } from '../canvas';

class Simulation {
  constructor(size) {
    this.canvas = new Canvas();

    this.population = initialization(size, this.canvas);
  }

  start() {
    requestAnimationFrame(this.simulate.bind(this));
  }

  simulate() {
    this.population = evaluation(this.population);
    this.population = selection(this.population);
    this.population = crossover(this.population);
    this.population = mutation(this.population);

    const [leader] = this.population.sort(({ fitness: a }, { fitness: b }) => b - a);

    this.animate();

    requestAnimationFrame(this.simulate.bind(this));
  }

  update() {
    this.population.forEach(member => member.update());
  }

  draw() {
    this.canvas.clear();
    this.update();
  }

  animate() {
    this.draw();
  }
}

export { Simulation };
