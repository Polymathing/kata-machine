const directions = [
    [0, 1], // x, y => top
    [1, 0], // right
    [0, -1], // bottom
    [-1, 0] // left
]


function canWalk(maze: string[], wall: string, curr: Point, end: Point, seen: boolean[][], path: Point[]) {
    
    if (curr.y < 0 || curr.y >= maze.length ||
        curr.x < 0 || curr.x >= maze[0].length
     ) {
        return false;
     }

     if (maze[curr.y][curr.x] === wall) {
        return false;
     }

     if (curr.x === end.x && curr.y === end.y) {
        path.push(curr);
        return true;
     }

     if (seen[curr.y][curr.x]) {
        return false;
     }

     seen[curr.y][curr.x] = true;
     path.push(curr);

     for(let i = 0; i < directions.length; ++i) {
        const [x, y] = directions[i];
        if (canWalk(maze, wall, {
            x: curr.x + x,
            y: curr.y + y
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