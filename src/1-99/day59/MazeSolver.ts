const directions = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1]
];

function walk(maze: string[], curr: Point, end: Point, wall: string, seen: boolean[][], path: Point[]) {

    if (curr.y === end.y && curr.x === end.x) {
        path.push(curr);
        return true;
    }

    if (maze[curr.y][curr.x] === wall) {
        return false;
    }

    if (seen[curr.y][curr.x]) {
        return false;
    }

    if (curr.y < 0 || curr.y > maze.length || 
        curr.x < 0 || curr.x > maze[0].length
    ) {
        return false;
    }

    path.push(curr);
    seen[curr.y][curr.x] = true;

    for(let i = 0; i < maze.length; ++i) {
        const [y, x] = directions[i];
        if (walk(maze, {
            y: curr.y + y,
            x: curr.x + x
        }, end, wall, seen, path)) {
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

    walk(maze, start, end, wall, seen, path);

    return path;
}