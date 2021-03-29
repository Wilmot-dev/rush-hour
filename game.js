import Board from "./board.js";
import Database from "./database.js";



const medium = new Database();
const game = new Board(medium.medium[7]);
console.log(game);
game.generateHTML();



// play(event) {
//   //figure out which div it is
//   const carLetter = event.target.classList[0];
//   let movingCar;
//   console.log(event.target.classList[0]);
//   game.carsArr.forEach(car => {
//     if (carLetter === car.letter) {
//       movingCar = car;
//     }
//   });
//   //check orientation
//   //only move up/down left/right
//   if (movingCar.orientation === "vertical")  {
    
//   }
//   //press button
//   //check if can move that way
//   //let the block move that way
//   //console.log(Grid.GetRow(event));


  
  
// };


