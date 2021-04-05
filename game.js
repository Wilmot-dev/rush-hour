import Board from "./board.js";
import Database from "./database.js";


const database = new Database();
const easy = database.easy
const medium = database.medium;
const hard = database.hard;
document.querySelector("#easy").addEventListener("click", () => {
  document.querySelector(".home").classList.add("hide");
  document.querySelector("#game").classList.toggle("hide");
  const game = new Board(easy);
  game.generateHTML();
});
document.querySelector("#medium").addEventListener("click", () => {
  document.querySelector(".home").classList.toggle("hide");
  document.querySelector("#game").classList.toggle("hide");
  const game = new Board(medium);
  game.generateHTML();
});
document.querySelector("#hard").addEventListener("click", () => {
  document.querySelector(".home").classList.toggle("hide");
  document.querySelector("#game").classList.toggle("hide");
  const game = new Board(hard);
  game.generateHTML();
});

// console.log(game);


