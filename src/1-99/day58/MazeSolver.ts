function walkToFindPath(curr: Point, end: Point, path: Point[], maze: string[], wall: string, seen: boolean[][]) {
    // base line - it's the end
    if (curr.y === end.y && curr.x === end.x) {
        path.push(curr);
        return true;
    }

    // is it a wall
    if (maze[curr.y][curr.x] === wall) {
        return false;
    }

    // have we already been through this point?

    if (seen[curr.y][curr.x]) {
        return false;
    }

    path.push(curr);
    seen[curr.y][curr.x] = true;

    // loop until find the end;
    const directionsToWalk = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0]
    ];

    for (let i = 0; i < maze.length; ++i) {
        const [x, y] = directionsToWalk[i];
        if (walkToFindPath({
            x: curr.x + x,
            y: curr.y + y
        }, end, path, maze, wall, seen)) {
            return true;
        }
    }
    // if we do not find the end, then we pop this curr (wrong way) and return false

    path.pop();
    return false;
}

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {

    const path: Point[] = [];
    const seen: boolean[][] = [];

    for(let i = 0; i < maze.length; ++i) {
        seen.push(new Array(maze[i].length).fill(false));
    }

    walkToFindPath(start, end, path, maze, wall, seen);

    return path;
}