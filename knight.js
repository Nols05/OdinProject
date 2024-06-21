
function knightMoves(start, end) {

    const directions = [
        [-2, -1], [-1, -2], [1, -2], [2, -1],
        [2, 1], [1, 2], [-1, 2], [-2, 1]
    ];

    const isValid = (x, y) => {
        return x >= 0 && x < 8 && y >= 0 && y < 8;
    };

    const bfs = (start, end) => {
        const queue = [[start, [start]]];
        const visited = new Set();


        while (queue.length) {
            const [current, path] = queue.shift();
            const [x, y] = current;
            visited.add(current.toString());

            if (x == end[0] && y == end[1]) {
                return path;
            }

            for (const [dx, dy] of directions) {
                let newX = x + dx;
                let newY = y + dy;
                let newPosition = [newX, newY];

                if (isValid(newX, newY) && !visited.has(newPosition.toString())) {
                    visited.add(newPosition.toString());
                    queue.push([newPosition, path.concat([newPosition])]);
                }
            }

        }

    };


    let path = bfs(start, end);
    console.log("You made it in " + (path.length - 1) + " moves! Here's your path: ")
    for (const x of path) {
        console.log(x);
    }

    return path;


}



knightMoves([3, 3], [4, 3])