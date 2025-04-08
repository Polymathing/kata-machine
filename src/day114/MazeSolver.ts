const DIR = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0]
];

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
    const path: Point[] = [];
    const seen: boolean[][] = [];

    for(let i = 0; i < maze.length; ++i) {
        seen.push(new Array(maze[i].length).fill(false));
    }

    walkIfYouCan(maze, wall, start, end, seen, path);
    
    return path;
}   


function walkIfYouCan(maze: string[], wall: string, curr: Point, end: Point, seen: boolean[][], path: Point[]): boolean {
    const { y , x } = curr;
    const isTheEnd = end.y === y && end.x === x;

    if (isTheEnd) {
        path.push(curr);
        return true;
    }

    const isOutOfBounds = y < 0 || x < 0 || y >= maze.length || x >= maze[0].length;
    const isSeen = seen[y][x];
    const isWall = wall === maze[y][x];

    if (isOutOfBounds || isSeen || isWall) {
        return false;
    }

    path.push(curr);
    seen[y][x] = true;

    for(const [dy, dx] of DIR) {
        const next: Point = { y: y + dy, x: x + dx };
        if (walkIfYouCan(maze, wall, next, end, seen, path)) {
            return true;
        }
    }

    path.pop();
    return false;
}