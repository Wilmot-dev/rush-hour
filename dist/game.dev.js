"use strict";

var _board = _interopRequireDefault(require("./board.js"));

var _database = _interopRequireDefault(require("./database.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var medium = new _database["default"]();
var game = new _board["default"](medium.medium[7]);
console.log(game);
game.generateHTML(); // play(event) {
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