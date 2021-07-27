class Member {
  constructor(x, y, { canvas }) {
    this.canvas = canvas;
    this.x = x;
    this.y = y;
    this.v = 1;
  }

  update() {
    this.x = this.x + this.v;
    this.y = this.y + this.v;
    this.draw();
  }

  draw() {
    this.canvas.triangle(this.x, this.y, 20, 40);
  }
}

export { Member };
