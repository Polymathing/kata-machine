const directions = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1]
];

function canWalk(maze: string[], wall: string, curr: Point, end: Point, seen: boolean[][], path: Point[]) {
    const currentY = curr.y;
    const currentX = curr.x;

    if (currentY === end.y && currentX === end.x) {
        path.push(curr);
        return true;
    }

    if (currentY < 0 || currentY > maze.length ||
        currentX < 0 || currentX > maze[0].length
    ) {
        return false;
    }

    if (maze[currentY][currentX] === wall) {
        return false;
    }

    if (seen[currentY][currentX]) {
        return false;
    }

    path.push(curr);
    seen[currentY][currentX] = true;

    for(let i = 0; i < maze.length; ++i) {
        const [y, x] = directions[i];
        if (canWalk(maze, wall, {
            y: currentY + y,
            x: currentX + x
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