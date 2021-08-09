import { makeGenes } from './utiltiies';

class Member {
  constructor(index, genes = makeGenes()) {
    this.index = index;
    this.x = 10 * this.index + 300;
    this.y = 900;
    this.age = 0;
    this.alive = true;
    this.genes = genes;
  }

  kill() {
    this.alive = false;
  }

  update() {
    if (!this.alive) return;

    this.x += this.genes[this.age].x;
    this.y -= this.genes[this.age].y;
    this.age += 1;
  }

  draw() {
    if (this.alive) window.canvas.triangle(this.x, this.y, 10, 20, 'black');
    else window.canvas.triangle(this.x, this.y, 10, 20, 'red');
  }
}

export { Member };
