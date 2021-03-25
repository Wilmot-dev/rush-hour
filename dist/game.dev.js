"use strict";

var _board = _interopRequireDefault(require("./board.js"));

var _database = _interopRequireDefault(require("./database.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//import Car from "./car.js";
var medium = new _database["default"]();
var game = new _board["default"](medium.medium[7]);
console.log(game);
game.generateHTML();