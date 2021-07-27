class Member {
  constructor(x, y, xv = 0, yv = 0, { canvas, fitness = 0 }) {
    this.canvas = canvas;
    this.x = x + 150;
    this.y = y;
    this.xv = xv;
    this.yv = yv;
    this.fitness = fitness;
    this.time = Date.now();
  }

  update() {
    this.x = this.x + this.xv;
    this.y = this.y + this.yv;

    this.done = this.y < 0;

    if (this.done) this.time = Date.now() - this.time;

    this.draw();
  }

  draw() {
    this.canvas.triangle(this.x, this.y, 10, 20);
  }
}

export { Member };
