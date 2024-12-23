const dir = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1]
];

function canWalk(maze: string[], wall: string, curr: Point, end: Point, path: Point[], seen: boolean[][]) {
    const {y , x } = curr;
    if (y === end.y && x === end.x) {
        path.push(curr);
        return true;
    }

    if (y < 0 || y > maze.length || x < 0 || x > maze[0].length) {
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
        if (canWalk(maze, wall, {
            y: y + dirY,
            x: x + dirX
        }, end, path, seen)) {
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

    canWalk(maze, wall, start, end, path, seen);
    return path;
}