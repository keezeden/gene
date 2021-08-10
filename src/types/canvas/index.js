class Canvas {
  constructor() {
    const element = document.getElementById('canvas');
    this.canvas = element.getContext('2d');
  }

  line({ x: ax, y: ay }, { x: bx, y: by }, w) {
    this.canvas.lineWidth = w;
    this.canvas.beginPath();
    this.canvas.moveTo(ax, ay);
    this.canvas.lineTo(bx, by);
    this.canvas.stroke();
    this.canvas.lineWidth = 1;
  }

  triangle(x, y, width, height, color) {
    this.canvas.fillStyle = color;
    this.canvas.beginPath();
    this.canvas.moveTo(x, y - height / 2);
    this.canvas.lineTo(x - width / 2, y + height / 2);
    this.canvas.lineTo(x + width / 2, y + height / 2);
    this.canvas.lineTo(x, y - height / 2);
    this.canvas.fill();
    this.canvas.fillStyle = 'black';
  }

  clear() {
    this.canvas.fillStyle = 'white';
    this.canvas.fillRect(0, 0, 1920, 1080);
    this.canvas.fillStyle = 'black';
  }

  loop(callback) {
    setTimeout(() => {
      callback();
      this.loop(callback);
    }, 1);
  }
}

export { Canvas };
