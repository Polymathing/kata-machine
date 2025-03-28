const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
];
function canWalk(maze: string[], wall: string, curr: Point, end: Point, seen: boolean[][], path: Point[]): boolean {
    if (curr.y === end.y && curr.x === end.x) {
        path.push(curr);
        return true;
    }

    if (curr.y < 0 || curr.y > maze.length ||
        curr.x < 0 || curr.x > maze[0].length
    ) {
        return false;
    }

    if (maze[curr.y][curr.x] === wall) {
        return false;
    }

    if (seen[curr.y][curr.x]) {
        return false;
    }

    path.push(curr);
    seen[curr.y][curr.x] = true;


    for(let i = 0; i < maze.length; ++i) {
        const [y, x] = directions[i];
        if (canWalk(maze, wall, {
            y: curr.y + y,
            x: curr.x + x
        }, end, seen, path)) {
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

    canWalk(maze, wall, start, end, seen, path);

    return path;
}