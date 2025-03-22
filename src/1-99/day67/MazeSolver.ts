const directions = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1]
];

function canWalk(maze: string[], wall: string, curr: Point, end: Point, seen: boolean[][], path: Point[]): boolean {
    const currY = curr.y;
    const currX = curr.x;

    if (currY === end.y && currX === end.x) {
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
        if (canWalk(maze, wall, {
            y: currY + y,
            x: currX + x
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

    canWalk(maze, wall, start, end, seen, path);

    return path;
}