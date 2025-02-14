import maze_solver from "@code/MazeSolver";


test("maze solver with start or end at edge", function () {
    const maze = [
        "xxxxx",
        "x   x",
        "x x x",
        "x   x",
        "xxxxx",
    ];
    const mazeResult = [
        "xxxxx",
        "x   x",
        "x x x",
        "x   x",
        "xxxxx",
    ];
    const result = maze_solver(maze, "x", { x: 5, y: 0 }, { x: 5, y: 4 });
    expect(drawPath(maze, result)).toEqual(mazeResult);
});

test("maze solver with a complex maze", function () {
    const maze = [
        "xxxxxxxxxxxxxx",
        "x     x     xx",
        "x xxx x xxx  x",
        "x x   x   x  x",
        "x xxx x xxx  x",
        "x xxxxxxx xxxx",
        "x         x  x",
        "xxxxxxxxxxxxxx",
    ];

    const mazeResult = [
        "xxxxxxxxxxxxxx",
        "x     x     xx",
        "x xxx x xxx  x",
        "x x   x   x  x",
        "x xxx x xxx  x",
        "x xxxxxxx xxxx",
        "x         x  x",
        "xxxxxxxxxxxxxx",
    ];

    const result = maze_solver(maze, "x", { x: 1, y: 1 }, { x: 12, y: 4 });
    expect(drawPath(maze, result)).toEqual(mazeResult);
});

function drawPath(data: string[], path: Point[]) {
    const data2 = data.map((row) => row.split(''));
    path.forEach((p) => {
        if (data2[p.y] && data2[p.y][p.x]) {
            data2[p.y][p.x] = '*';
        }
    });
    return data2.map(d => d.join(''));
}

