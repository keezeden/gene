const triangle = canvas => (x, y, width, height) => {
  canvas.beginPath();
  canvas.moveTo(x, y - height / 2);
  canvas.lineTo(x - width / 2, y + height / 2);
  canvas.lineTo(x + width / 2, y + height / 2);
  canvas.lineTo(x, y - height / 2);
  canvas.fill();
};

const clear = canvas => () => {
  canvas.fillStyle = 'white';
  canvas.fillRect(0, 0, 1920, 1080);
  canvas.fillStyle = 'black';
};

const createShapeUtilities = canvas => {
  return {
    triangle: triangle(canvas),
    square: triangle(canvas),
    circle: triangle(canvas),
    clear: clear(canvas),
  };
};

export { createShapeUtilities };
