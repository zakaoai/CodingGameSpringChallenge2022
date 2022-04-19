export function manhattanDist(a, b) {
  return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
}

export function compareManhattanDist(position, a, b) {
  return manhattanDist(position, a) - manhattanDist(position, b);
}

// Generic Function
export function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
}
