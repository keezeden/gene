class Member {
  constructor(x, y, xv = 0, yv = 0, { canvas }) {
    this.canvas = canvas;
    this.x = x;
    this.y = y;
    this.xv = xv;
    this.yv = yv;
  }

  update() {
    this.x = this.x + this.xv;
    this.y = this.y + this.yv;
    this.draw();
  }

  draw() {
    this.canvas.triangle(this.x, this.y, 10, 20);
  }
}

export { Member };
