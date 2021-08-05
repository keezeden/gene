// https://stackoverflow.com/questions/9043805/test-if-two-lines-intersect-javascript-function
// returns true if the line from (ax,ay)->(bx,by) intersects with (cx,cy)->(dx,dy)
const intersects = ({ x: ax, y: ay }, { x: bx, y: by }, { x: cx, y: cy }, { x: dx, y: dy }) => {
  var det, gamma, lambda;
  det = (bx - ax) * (dy - cy) - (dx - cx) * (by - ay);
  if (det === 0) {
    return false;
  } else {
    lambda = ((dy - cy) * (dx - ax) + (cx - dx) * (dy - ay)) / det;
    gamma = ((ay - by) * (dx - ax) + (bx - ax) * (dy - ay)) / det;
    return 0 < lambda && lambda < 1 && 0 < gamma && gamma < 1;
  }
};

export { intersects };
