export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
    const path: Point[] = [];
    const seen: boolean[][] = [];

    for(let i = 0; i < maze.length; ++i) {
        seen.push(new Array(maze[i].length).fill(false));
    }

    canWalk(maze, wall, start, end, path, seen);
    return path;
}

const DIR = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0]
];

function canWalk(maze: string[], wall: string, curr: Point, end: Point, path: Point[], seen: boolean[][]): boolean {
    const { y, x } = curr;
    const isTheEnd = y === end.y && x === end.x;

    if (isTheEnd) {
        path.push(curr);
        return true;
    }

    const isOutOfBounds = y >= maze.length || y < 0 || x >= maze[0].length || x < 0;
    const isWall = maze[y][x] === wall;
    const isSeen = seen[y][x];

    if (isOutOfBounds || isWall || isSeen) {
        return false;
    }

    path.push(curr);
    seen[y][x] = true;

    for(const [dy, dx] of DIR) {
        const next: Point = { y: y + dy, x: x + dx };
        if (canWalk(maze, wall, next, end, path, seen)) {
            return true;
        }
    }

    path.pop();
    return false;
}