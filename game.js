import Board from "./board.js";
import Database from "./database.js";
//import Car from "./car.js";


const medium = new Database();
const game = new Board(medium.medium[7]);
console.log(game);
game.generateHTML();



// function play(event, name) {
//   //figure out which div it is
//   //check orientation
//   //only move up/down left/right
//   //press button
//   //check if can move that way
//   //let the block move that way
//   //console.log(Grid.GetRow(event));

//   console.log(event.getAttribute("name"));

//   console.log(event);
//   if (event.orientation === "vertical") {
//     console.log("vertical");
//   }
// };

// const cars = document.querySelectorAll(".car");
// for (let i = 0; i < cars.length; i++) {
//   const car = cars[i];
//   car.addEventListener("click", play); 
// }

function play(event) {
  //figure out which div it is
  //check orientation
  //only move up/down left/right
  //press button
  //check if can move that way
  //let the block move that way
  //console.log(Grid.GetRow(event));

  console.log(event.target.value);

  console.log(event);
  if (event.orientation === "vertical") {
    console.log("vertical");
  }
};

// const cars = document.querySelectorAll(".car");
// for (let i = 0; i < cars.length; i++) {
//   const car = cars[i];
//   car.onclick 
// }