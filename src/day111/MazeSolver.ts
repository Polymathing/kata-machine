<<<<<<< HEAD
const DIRECTIONS: number[][] = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
=======
const DIR = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0]
>>>>>>> e60797dc02815eafafb852d813c45d9858591022
]

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
    const seen: boolean[][] = [];
    const path: Point[] = [];

    for(let i = 0; i < maze.length; ++i) {
        seen.push(new Array(maze[i].length).fill(false));
    }

    walk(maze, wall, start, end, seen, path);
<<<<<<< HEAD

    return path;
}

function walk(maze: string[], wall: string, curr: Point, end: Point, seen: boolean[][], path: Point[]): boolean {
    const { y , x } = curr;
    const isTheEnd = end.y === y && end.x === x;

=======
    
    return path;
}

function walk(maze: string[], wall: string, curr: Point, end: Point, seen: boolean[][], path: Point[]) {
    const { y , x } = curr;
    const isTheEnd = end.y === y && end.x === x;
    
>>>>>>> e60797dc02815eafafb852d813c45d9858591022
    if (isTheEnd) {
        path.push(curr);
        return true;
    }

    const isOutOfBounds = y < 0 || x < 0 || y >= maze.length || x >= maze[0].length;
<<<<<<< HEAD
    const isAWall = wall === maze[y][x];
    const isSeen = seen[y][x];

    if (isOutOfBounds || isAWall || isSeen) {
=======
    const isWall = wall === maze[y][x];
    const isSeen = seen[y][x];

    if (isOutOfBounds || isWall || isSeen) {
>>>>>>> e60797dc02815eafafb852d813c45d9858591022
        return false;
    }

    path.push(curr);
    seen[y][x] = true;
<<<<<<< HEAD
    
    for(const [dY, dX] of DIRECTIONS) {
        const next = { y: y + dY, x : x + dX }
=======

    for(const [dY, dX] of DIR) {
        const next: Point = { y: y + dY, x: x + dX };
>>>>>>> e60797dc02815eafafb852d813c45d9858591022
        if (walk(maze, wall, next, end, seen, path)) {
            return true;
        }
    }
<<<<<<< HEAD
    
=======

>>>>>>> e60797dc02815eafafb852d813c45d9858591022
    path.pop();
    return false;
}