const next = (canvas, members) => {
  requestAnimationFrame(() => frame(canvas, members));
};

const update = members => {
  members.forEach(member => member.update());
};

const frame = (canvas, members) => {
  canvas.clear();
  update(members);
  next(canvas, members);
};

const animate = (canvas, members) => {
  requestAnimationFrame(() => frame(canvas, members));
};

export { animate };
