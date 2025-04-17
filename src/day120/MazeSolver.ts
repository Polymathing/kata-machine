export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
    const seen: boolean[][] = [];
    const path: Point[] = [];

    for(let i = 0; i < maze.length; ++i) {
        seen.push(new Array(maze[i].length).fill(false));
    }

    canWalk(maze, wall, start, end, seen, path);
    return path;
}

const DIR = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0]
]

function canWalk(maze: string[], wall: string, curr: Point, end: Point, seen: boolean[][], path: Point[]) {
    const { y, x } = curr;
    const isTheEnd = y === end.y && x === end.x;

    if (isTheEnd) {
        path.push(curr);
        return true;
    }

    const isOutOfBounds = y < 0 || x < 0 || y >= maze.length || x >= maze[0].length;
    const isSeen = seen[y][x];
    const isWall = wall === maze[y][x];

    if (isOutOfBounds || isSeen || isWall) {
        return false;
    }

    seen[y][x] = true;
    path.push(curr);

    for(const [dY, dX] of DIR) {
        const next = { y: y + dY, x: x + dX };
        if (canWalk(maze, wall, next, end, seen, path)) {
            return true;
        }
    }

    path.pop();
    return false;
}