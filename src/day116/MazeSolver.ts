const DIR = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0]
];

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
    const path: Point[] = [];
    const seen: boolean[][] = [];

    for(let i = 0; i < maze.length; ++i) {
        seen.push(new Array(maze[i].length).fill(false));
    }

    canWalk(maze, wall, start, end, seen, path);

    return path;
}

function canWalk(maze: string[], wall: string, curr: Point, end: Point, seen: boolean[][], path: Point[]): boolean {
    const { y, x } = curr;
    const isTheEnd = y === end.y && x === end.x;

    if (isTheEnd) {
        path.push(curr);
        return true;
    }

    const isSeen = seen[y][x];
    const isOutOfBounds = y < 0 || x < 0 || y >= maze.length || x >= maze[0].length;
    const isWall = wall === maze[y][x];

    if (isSeen || isOutOfBounds || isWall) { 
        return false;
    }

    path.push(curr);
    seen[y][x] = true;

    for(const [dY, dX] of DIR) {
        const next: Point = { y: y + dY, x: x + dX };
        if (canWalk(maze, wall, next, end, seen, path)) {
            return true;
        }
    }

    path.pop();
    return false;
}