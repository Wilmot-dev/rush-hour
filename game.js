import Board from "./board.js";
import Database from "./database.js";
//import Car from "./car.js";


const medium = new Database();
const game = new Board(medium.medium[7]);
console.log(game);
game.generateHTML();

