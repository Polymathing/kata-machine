const directions = [
    [0, 1], // top 
    [1, 0],
    [0, -1],
    [-1, 0]
];

function canWalk(maze: string[], curr: Point, end: Point, path: Point[], wall: string, seen: boolean[][]) {

    // is it the end? => if yes we add to path and return true

    if (curr.x === end.x && curr.y === end.y) {
        path.push(curr);
        return true;
    }

    // is it off limits?

    if (curr.y < 0 || curr.y > maze.length ||
        curr.x < 0 || curr.x > maze[0].length
    ) {
        return false;
    }

    // is it a wall?

    if (maze[curr.y][curr.x] === wall) {
        return false;
    }

    // have we seen it already?
    
    if (seen[curr.y][curr.x]) {
        return false;
    }

    path.push(curr);
    seen[curr.y][curr.x] = true;

    for (let i = 0; i < directions.length; ++i) {
        const [x, y] = directions[i];
        if(canWalk(maze, {
            x: curr.x + x,
            y: curr.y + y
        }, end, path, wall, seen)) {
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

    canWalk(maze, start, end, path, wall, seen);

    return path;
}