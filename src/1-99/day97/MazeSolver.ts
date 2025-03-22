const DIR = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1]
];

function walk(maze: string[], path: Point[], end: Point, curr: Point, seen: boolean[][], wall: string) {
    const { y, x } = curr;
    if (y < 0 || x < 0 || y >= maze.length || x >= maze[0].length) {
        return false;
    }

    if (end.y === y && end.x === x) {
        path.push(curr);
        return true;
    } 

    if (maze[y][x] === wall || seen[y][x]) {
        return false;
    }

    path.push(curr);
    seen[y][x] = true;

    for(const [dy, dx] of DIR) {
        const next: Point = { y: y + dy, x: x + dx };
        if (walk(maze, path, end, next, seen, wall)) {
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

    walk(maze, path, end, start, seen, wall);
    return path;
}