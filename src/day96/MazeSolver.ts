const DIRECTIONS = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1]
];

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
    const path: Point[] = [];
    const seen: boolean[][] = []; 

    for(let i = 0; i < maze.length; ++i) {
        seen.push(new Array(maze[i].length).fill(false));
    }

    const isPathFound = canWalk(maze, wall, start, end, seen, path);
    console.log(isPathFound);

    return isPathFound ? path : [];
}

function canWalk(maze: string[], wall: string, curr: Point, end: Point, seen: boolean[][], path: Point[]): boolean {
    const { y, x } = curr;

    if (y < 0 || x < 0 || y >= maze.length || x >= maze[0].length) {
        return false;
    }

    if (wall === maze[y][x]) {
        return false;
    }

    if (seen[y][x]) {
        return false;
    }

    if (end.y === y && end.x === x) {
        path.push(curr);
        return true;
    }

    seen[y][x] = true;
    path.push({...curr}); 

    
    for(const [dy, dx] of DIRECTIONS) {
        const nextPoint: Point = { y: y + dy, x: x + dx}
        if(canWalk(maze, wall, nextPoint, end, seen, path)) {
            return true;
        }
    }

    path.pop();
    return false;
}