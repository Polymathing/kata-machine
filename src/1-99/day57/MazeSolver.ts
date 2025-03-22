import { createUnparsedSourceFile } from "typescript";

function canWalk(maze: string[], curr: Point, wall: string, end: Point, path: Point[], seen: boolean[][]) {

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

    path.push(curr);
    seen[curr.y][curr.x] = true;


    const directions = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0]
    ]

    for(let i = 0; i < directions.length; ++i) {
        const [x, y] = directions[i];
        if (canWalk(maze, {
            x: curr.x + x,
            y: curr.y + y
        }, wall, end, path, seen)) {
            return true;
        }
    };

    path.pop();
    return false;
}

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
    const path: Point[] = [];
    const seen: boolean[][] = [];

    for(let i = 0; i < maze.length; ++i) {
        seen.push(new Array(maze[i].length).fill(false));
    }

    canWalk(maze, start, wall, end, path, seen);

    return path;
}