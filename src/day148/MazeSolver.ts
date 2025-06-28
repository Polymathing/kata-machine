const DIR = [
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1]
];

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
  const seen: boolean[][] = [];
  const path: Point[] = [];

  for(let i = 0; i < maze.length; ++i) {
    seen.push(new Array(maze[i].length).fill(false));
  }

  walk(maze, wall, start, end, path, seen);
  return path;
}

function walk(maze: string[], wall: string, curr: Point, end: Point, path: Point[], seen: boolean[][]): boolean {
  const { y , x } = curr;
  const isTheEnd = end.y === y && end.x === x;
  if (isTheEnd) {
    path.push(curr);
    return true;
  }

  const isSeen = seen[y][x];
  const isWall = wall === maze[y][x]
  const isOutOfBounds = y < 0 || x < 0 || y >= maze.length || x >= maze[0].length;
  
  if (isSeen || isWall || isOutOfBounds) {
    return false;
  }

  path.push(curr);
  seen[y][x] = true;

  for(const [dy, dx] of DIR) {
    const next: Point = { y : y + dy, x: x + dx };
    if (walk(maze, wall, next, end, path, seen)) {
      return true;
    }
  }

  path.pop();
  return false;
}