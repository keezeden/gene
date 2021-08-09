import { initialization, evaluation, selection, crossover, mutation } from '../../algorithm';
import { intersects } from './utilities';

class Simulation {
  constructor(size, map) {
    this.population = initialization(size, this.canvas);
    this.map = map;
    this.started = false;

    window.canvas.loop(this.loop.bind(this));
  }

  terrain(map) {
    map.map(([start, finish]) => window.canvas.line(start, finish, 10));
  }

  start() {
    this.started = true;
  }

  strongest() {
    const [leader] = this.population.sort(({ fitness: a }, { fitness: b }) => a - b);

    document.getElementById('leader').innerHTML = `Age: ${leader.age}`;
  }

  generation() {
    this.population = evaluation(this.population);
    this.population = selection(this.population);
    this.population = crossover(this.population);
    this.population = mutation(this.population);

    this.strongest();
  }

  collision() {
    this.population.forEach(member => {
      const hitbox = [
        { x: member.x - 5, y: member.y },
        { x: member.x + 5, y: member.y - 10 }
      ];
      this.map.map(([start, finish]) => {
        if (intersects(start, finish, hitbox[0], hitbox[1])) {
          member.kill();
        }
      });
    });
  }

  update() {
    this.population.forEach(member => member.update());
  }

  draw() {
    window.canvas.clear();
    this.terrain(this.map);
    this.population.forEach(member => member.draw());
  }

  loop() {
    if (!this.started) return;

    this.collision();

    this.update();
    this.draw();
    const exit = this.population.every(member => !member.alive);

    if (exit) this.generation();
  }
}

export { Simulation };
