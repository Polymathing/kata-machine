const dir = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1]
];

function walk(maze: string[], wall: string, curr: Point, end: Point, seen: boolean[][], path: Point[]) {
    const { y, x } = curr;
    if (end.x === x && end.y === y) {
        path.push(curr);
        return true;
    }

    if (x < 0 || y < 0 || y > maze.length || x > maze[0].length) {
        return false;
    }

    if (maze[y][x] === wall) {
        return false;
    }

    if (seen[y][x]) {
        return false;
    }

    path.push(curr);
    seen[y][x] = true;

    for(let i = 0; i < maze.length; ++i) {
        const [dirY, dirX] = dir[i];

        if (walk(maze, wall, {
            x: dirX + x,
            y: dirY + y
        }, end, seen, path)) {
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

    walk(maze, wall, start, end, seen, path)

    return path;
}