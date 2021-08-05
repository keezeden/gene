import { makeGenes } from './utiltiies';

class Member {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.age = 0;
    this.alive = true;
    this.genes = makeGenes();
  }

  kill() {
    this.alive = false;
  }

  update() {
    if (!this.alive) return;

    this.x += this.genes[this.age].x;
    this.y -= this.genes[this.age].y;
    this.age++;
  }

  draw() {
    if (this.alive) window.canvas.triangle(this.x, this.y, 10, 20, 'black');
    else window.canvas.triangle(this.x, this.y, 10, 20, 'red');
  }
}

export { Member };
