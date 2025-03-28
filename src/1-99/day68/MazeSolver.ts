const dir = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1]
];

function canWalk(maze: string[], wall: string, curr: Point, end: Point, seen: boolean[][], path: Point[]) {
    const { y, x } = curr;

    if (end.y === y && end.x === x) {
        path.push(curr);
        return true;
    }

    if (y < 0 || y > maze.length ||
        x < 0 || x > maze[0].length
    ) {
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
        const [xDir, yDir] = dir[i];
        if (canWalk(maze, wall, {
            y: y + yDir,
            x: x + xDir
        }, end, seen, path)) {
            return true;
        }
    }

    path.pop();
    return false;
};

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
    const path: Point[] = [];
    const seen: boolean[][] = [];

    for(let i = 0; i < maze.length; ++i) {
        seen.push(new Array(maze.length).fill(false));
    }

    canWalk(maze, wall, start, end, seen, path);

    return path;
}