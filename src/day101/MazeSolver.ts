const DIR = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0]
];

function walk(maze: string[], wall: string, curr: Point, end: Point, seen: boolean[][], path: Point[]) {
    const { y, x } = curr;

    const isTheEnd = end.y === y && end.x === x;

    if (isTheEnd) {
        path.push(curr);
        return true;
    }

    const isOutOfBounds = y < 0 || y >= maze.length || x < 0 || x >= maze[0].length;
    const isAWall = wall === maze[y][x];
    const isSeen = seen[y][x];

    if (isOutOfBounds || isAWall || isSeen) {
        return false;
    }

    path.push(curr);
    seen[y][x] = true;

    for(const [dY, dX] of DIR) {
        const next: Point = { y : y + dY, x: x + dX };
        if (walk(maze, wall, curr, end, seen, path)) {
            return true;
        }
    }

    path.pop();
    return false;
}

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
    const path: Point[] = [];
    const seen: boolean[][] = [];

    for(let i = 0; i < maze.length; ++i) {
        seen.push(new Array(maze[i].length).fill(false));
    }

    walk(maze, wall, start, end, seen, path);
    
    return path;
}