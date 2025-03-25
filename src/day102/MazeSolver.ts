const DIR = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0]
];

function findNextStep(maze: string[], wall: string, seen: boolean[][], curr: Point, end: Point, path: Point[]) {
    const { y, x } = curr;
    const isTheEnd = end.y === y && end.x === x;

    if (isTheEnd) {
        path.push(curr);
        return true;
    }

    const isOutOfBounds = y < 0 || x < 0 || y <= maze.length || x <= maze[0].length;
    const isSeen = seen[y][x];
    const isAWall = wall === maze[y][x];

    if (isOutOfBounds || isSeen || isAWall) {
        return false;
    }

    seen[y][x] = true;
    path.push(curr);

    for(const [dY, dX] of DIR) {
        const next: Point = { y: y + dY, x: x + dX };
        if (findNextStep(maze, wall, seen, next, end, path)) {
            return true;
        }
    }

    path.pop();
    return false;
}

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
    const seen: boolean[][] = [];
    const path: Point[] = [];

    for(let i = 0; i < maze.length; ++i) {
        seen.push(new Array(maze[i].length).fill(false));
    }

    findNextStep(maze, wall, seen, start, end, path);

    return path;
}