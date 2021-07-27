class Canvas {
  constructor() {
    const element = document.getElementById('canvas');
    this.canvas = element.getContext('2d');
  }

  triangle(x, y, width, height) {
    this.canvas.beginPath();
    this.canvas.moveTo(x, y - height / 2);
    this.canvas.lineTo(x - width / 2, y + height / 2);
    this.canvas.lineTo(x + width / 2, y + height / 2);
    this.canvas.lineTo(x, y - height / 2);
    this.canvas.fill();
  }

  clear() {
    this.canvas.fillStyle = 'white';
    this.canvas.fillRect(0, 0, 1920, 1080);
    this.canvas.fillStyle = 'black';
  }
}

export { Canvas };
