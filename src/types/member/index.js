import { makeGenes } from './utiltiies';

class Member {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.age = 0;
    this.alive = true;
    this.genes = makeGenes();
  }

  update() {
    this.x += this.genes[this.age].x;
    this.y -= this.genes[this.age].y;
    this.age++;
  }

  draw() {
    window.canvas.triangle(this.x, this.y, 10, 20);
  }
}

export { Member };
