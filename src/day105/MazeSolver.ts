const DIR = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0]
]

function walk(maze: string[], wall: string, curr: Point, seen: boolean[][], path: Point[], end: Point): boolean {
    const { y, x } = curr;
    
    const isTheEnd = end.y === y && end.x === x;
    if (isTheEnd) {
        path.push(curr);
        return true;
    }

    const isOutOfBounds = y < 0 || x < 0 || y >= maze.length || x >= maze[0].length;
    const isWall = maze[y][x] === wall;
    const isSeen = seen[y][x];

    if (isOutOfBounds || isWall || isSeen) {
        return false;
    }

    path.push(curr);
    seen[y][x] = true;

    for(const [dY, dX] of DIR) {
        const next = { y: y + dY, x: x + dX };
        if (walk(maze, wall, next, seen, path, end)) {
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

    walk(maze, wall, start, seen, path, end);

    return path;
}