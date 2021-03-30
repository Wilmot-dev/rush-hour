"use strict";

var _board = _interopRequireDefault(require("./board.js"));

var _database = _interopRequireDefault(require("./database.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// window.addEventListener("load", () => {
//   document.querySelector("#home").classList.toggle("hide");
// });
var database = new _database["default"]();
var easy = "ooBoCCooBoooAABoooDDDooEoooooEoooooE";
var medium = database.medium[0];
var hard = database.medium[2];
document.querySelector("#easy").addEventListener("click", function () {
  document.querySelector("#home").classList.add("hide");
  document.querySelector("#game").classList.toggle("hide");
  var game = new _board["default"](easy);
  game.generateHTML();
});
document.querySelector("#medium").addEventListener("click", function () {
  document.querySelector("#home").classList.toggle("hide");
  document.querySelector("#game").classList.toggle("hide");
  var game = new _board["default"](medium);
  game.generateHTML();
});
document.querySelector("#hard").addEventListener("click", function () {
  document.querySelector("#home").classList.toggle("hide");
  document.querySelector("#game").classList.toggle("hide");
  var game = new _board["default"](hard);
  game.generateHTML();
}); // console.log(game);