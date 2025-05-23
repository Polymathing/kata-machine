const directions = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1]
];

function canWalk(maze: string[], curr: Point, end: Point, wall: string, seen: boolean[][], path: Point[]) {
    const currY = curr.y;
    const currX = curr.x;

    if (end.x === currX && end.y === currY) {
        path.push(curr);
        return true;
    }

    if (currY < 0 || currY > maze.length ||
        currX < 0 || currX > maze[0].length
    ) {
        return false;
    }

    if (maze[currY][currX] === wall) {
        return false;
    }

    if (seen[currY][currX]) {
        return false;
    }

    path.push(curr);
    seen[currY][currX] = true;

    for(let i = 0; i < maze.length; ++i) {
        const [y, x] = directions[i];
        if (canWalk(maze, {
            y: currY + y,
            x: currX + x
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

    canWalk(maze, start, end, wall, seen, path);

    return path;
}