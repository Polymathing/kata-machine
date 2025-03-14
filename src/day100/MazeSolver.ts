const DIR = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0]
];

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
    const seen: boolean[][] = [];
    const path: Point[] = [];

    for(let i = 0; i < maze.length; ++i) {
        seen.push(new Array(maze[i].length).fill(false));
    }

    walk(maze, wall, seen, end, start, path);;

    return path;
}

function walk(maze: string[], wall: string, seen: boolean[][], end: Point, curr: Point, path: Point[]) {
    const { y, x } = curr;
    const isTheEnd = end.y === y && end.x === x;

    if (isTheEnd) {
        path.push(curr);
        return true;
    }

    const isOutOfBound = y < 0 || y >= maze.length || x < 0 || x >= maze[0].length;
    const isSeen = seen[y][x];
    const isAwall = wall === maze[y][x];

    if (isOutOfBound || isSeen || isAwall) {
        return false;
    }

    seen[y][x] = true;
    path.push(curr);

    for(const [dY, dX] of DIR) {
        const next = { y: y + dY, x: x + dX };
        if (walk(maze, wall, seen, end, next, path)) {
            return true;
        }
    }

    path.pop();
    return false;
}