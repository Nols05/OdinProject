
import { Ship, Gameboard, Player } from "./game.js";



const player1 = new Player("board1").gameboard;
const player2 = new Player("board2").gameboard;



player1.displayBoard();
player2.displayBoard();

player1.placeShip(new Ship(3), 2, 4, false);
player1.placeShip(new Ship(3), 5, 1);
player1.placeShip(new Ship(3), 4, 7, false)

player2.placeShip(new Ship(3), 2, 4, false);
player2.placeShip(new Ship(3), 5, 1);
player2.placeShip(new Ship(3), 4, 7, false)

player1.displayBoard();



