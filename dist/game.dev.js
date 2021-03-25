"use strict";

var _board = _interopRequireDefault(require("./board.js"));

var _database = _interopRequireDefault(require("./database.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//import Car from "./car.js";
var medium = new _database["default"]();
var game = new _board["default"](medium.medium[7]);
console.log(game);
game.generateHTML(); // function play(event, name) {
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
}

; // const cars = document.querySelectorAll(".car");
// for (let i = 0; i < cars.length; i++) {
//   const car = cars[i];
//   car.onclick 
// }