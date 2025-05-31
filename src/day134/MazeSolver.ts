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

    const isOutOfBounds = y < 0 || y >= maze.length || x < 0 || x >= maze[0].length;
    const isAWall = maze[y][x] === wall;
    const isSeen = seen[y][x];

    if (isOutOfBounds || isAWall || isSeen) {
        return false;
    }

    path.push(curr);
    seen[y][x] = true;

    for(const [dy, dx] of DIR) {
        const next: Point = { y: y + dy, x: x + dx };
        if (canWalk(maze, wall, next, end, seen, path)) {
            return true;
        }
    }

    path.pop();
    return false;
}