const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
];

function canWalk(maze: string[], wall: string, curr: Point, end: Point, seen: boolean[][], path: Point[]) {

    // is off limits?
    if (curr.y < 0 || curr.y > maze.length || 
        curr.x < 0 || curr.x >= maze[0].length) {
        return false;
    }

    // is a wall?

    if (maze[curr.y][curr.x] === wall) {
        return false;
    }

    // is the end? if it is the end, we need to push the curr to path

    if (curr.y === end.y && curr.x === end.x) {
        path.push(curr);
        return true;
    }

    // have I walked there? Is it seen?
    if (seen[curr.y][curr.x]) {
        return false;
    }

    // if all conditions above are not true, we must mark the path as seen and loop through the directions 

    seen[curr.y][curr.x] = true;
    path.push(curr);

    // now we loop through each direction in css order (top, right, bottom, left)

    for(let i = 0; i < directions.length; ++i) {
        const [x, y] = directions[i];
        if (canWalk(maze, wall, {
            x: curr.x + x,
            y: curr.y + y
        }, end, seen, path)) {
            return true;
        }
    }


    // Backtrack if no valid path found, if none of the directions lead to a valid path, the current point is removed from the path (backtracking)
    
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