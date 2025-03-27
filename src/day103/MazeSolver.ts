const DIR = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0]
];

function walk(maze: string[], curr: Point, end: Point, seen: boolean[][], path: Point[], wall: string) {
    const { y, x } = curr;
    const isTheEnd = end.y === y && end.x === x;

    if (isTheEnd) {
        path.push(curr);
        return true;
    }

    const isOutOfBounds = y < 0 || x < 0 || y >= maze.length || x >= maze[0].length; 
    const isSeen = seen[y][x];
    const isAWall = wall === maze[y][x];

    if (isOutOfBounds || isSeen || isAWall) {
        return false;
    }

    path.push(curr);
    seen[y][x] = true;

    for(const [dY, dX] of DIR) {
        const next: Point = { y: y + dY, x: x + dX };
        if (walk(maze, next, end, seen, path, wall)) {
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

    walk(maze, start, end, seen, path, wall);

    return path;
}