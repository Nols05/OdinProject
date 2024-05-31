
function createPlayer(name, symbol) {
    return { name, symbol };
}


const createGameboard = () => {
    let board = [
        ['_', '_', '_'],
        ['_', '_', '_'],
        ['_', '_', '_']
    ];

    const getBoard = () => { return board; }

    const updateBoard = (row, column, symbol) => {
        board[row][column] = symbol;
    }

    const displayBoard = () => {
        console.log(board);
    }

    const resetBoard = () => {
        board = [
            ['_', '_', '_'],
            ['_', '_', '_'],
            ['_', '_', '_']
        ];
    }


    return { board, getBoard, updateBoard, displayBoard, resetBoard }

}


const gameController = (n1, n2) => {

<<<<<<< HEAD

=======
>>>>>>> 9401284fa93a2b30513c2f09e4dca46cf5b5db5c
    const player1 = createPlayer(n1, 'X');
    const player2 = createPlayer(n2, 'O');
    let currentPlayer = player1;

    const gameboard = createGameboard();
    gameboard.displayBoard();

    let squares = document.querySelectorAll(".square");
    squares.forEach((square, index) => {
        square.addEventListener("click", () => {
            const row = Math.floor(index / 3);
            const col = index % 3;

            if (gameboard.board[row][col] == '_') {
                square.textContent = currentPlayer.symbol;
                makeMove(row, col);
            }
        })
    })


    const switchTurn = () => {
        currentPlayer = (currentPlayer === player1) ? player2 : player1;
    }

    const hasWon = () => {
        let board = gameboard.board;

        for (let i = 0; i < 3; i++) {

            if (board[i][0] != '_' && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
                return true; //Hay una fila completa
            }
            if (board[0][i] !== '_' && board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
                return true; // Hay una columna completa
            }
            if (board[0][0] !== '_' && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
                return true; // Hay una diagonal de izquierda a derecha
            }
            if (board[0][2] !== '_' && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
                return true; // Hay una diagonal de derecha a izquierda
            }
        }

        return false;
    }



    const makeMove = (row, col) => {

        if (gameboard.getBoard()[row][col] == '_') {
            gameboard.updateBoard(row, col, currentPlayer.symbol);
            gameboard.displayBoard();
            if (hasWon()) {
                let div = document.createElement("div");
                div.textContent = "Congrats! " + currentPlayer.name + " wins."
                div.classList.add("congrats")

                document.body.appendChild(div);

            }
            else {
                switchTurn();
            }
        }
    }

    const resetGame = () => {
        gameboard.resetBoard();
        currentPlayer = player1;
    }

    return { player1, player2, gameboard, switchTurn, makeMove, resetGame, hasWon };


}


let startbtn = document.querySelector(".start");
startbtn.addEventListener("click", () => {
    let n1 = prompt("Player1: ");
    let n2 = prompt("Player2: ");
    let game = gameController(n1, n2);



})




