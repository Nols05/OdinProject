
class Ship {
    constructor(length) {
        this.length = length;
        this.timesHitted = 0;
    }

    hit() {
        this.timesHitted++;
    }

    isSunk() {
        return this.timesHitted >= this.length;
    }

}

class Gameboard {

    constructor(containerId) {
        this.board = this.createBoard();
        this.containerId = containerId;
        this.missedAttacks = new Set();
    }

    createBoard() {
        const board = [];
        for (let i = 0; i < 8; i++) {
            const row = new Array(8).fill(null);
            board.push(row);
        }
        return board;
    }

    placeShip(ship, x, y, horizontal = true) {


        if (horizontal) {
            if (x + ship.length - 1 < 8) {
                for (let i = 0; i < ship.length; i++) {
                    this.board[y][x + i] = ship;

                }
            }
            else {
                console.log("No se puede colocar aquí");
                return false;
            }


        } else {
            if (y - ship.length - 1 >= 0) {
                for (let i = 0; i < ship.length; i++) {
                    this.board[y - i][x] = ship;
                }
            }
            else {
                console.log("No se puede colocar aquí");
                return false;
            }
        }

        this.displayBoard();
        return true;
    }







    receiveAttack(x, y) {

        if (x <= 7 && x >= 0 && y <= 7 && y >= 0) {
            if (this.board[x][y]) {
                this.board[x][y].hit();
                console.log("TOCADO");
                return true;
            }
            else {
                console.log("AGUA");
                return false;
            }
        }
        else {
            console.log("Coordenadas incorrectas");
            return false;
        }

    }

    gameOver() {
        return this.numberShips == 0;
    }

    displayBoard() {
        const container = document.getElementById(this.containerId);
        container.innerHTML = '';
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                if (this.board[i][j]) {
                    cell.classList.add('hasShip');
                }

                container.appendChild(cell);
            }
        }
    }
}

class Player {
    constructor(containerId) {
        this.gameboard = new Gameboard(containerId);

    }
}

export { Ship, Gameboard, Player };