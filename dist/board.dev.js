"use strict";

var _database = _interopRequireDefault(require("./database.js"));

var _car = _interopRequireDefault(require("./car.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Board =
/*#__PURE__*/
function () {
  function Board(boardString) {
    _classCallCheck(this, Board);

    this.grid = new Array(6).fill(new Array(6));
    this.carsArr = this.makeCarsArr("IBBxooIooLDDJAALooJoKEEMFFKooMGGHHHM");
  }

  _createClass(Board, [{
    key: "setBoard",
    value: function setBoard(boardString) {
      for (var i = 0; i < 6; i++) {
        var variable = boardString.substring(i * 6, i * 6 + 6);
        this.grid[i] = variable.split("");
      }
    }
  }, {
    key: "makeCarsArr",
    value: function makeCarsArr(boardString) {
      this.setBoard(boardString);
      var alphaArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "o", "P", "Q", "R", "S", "T", "U", "V", "W", "x", "Y", "Z"];
      var alreadyMade = [];
      var carArray = [];
      var start;
      var end;

      for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 6; j++) {
          if (this.grid[i][j] === "o" || alreadyMade.includes(this.grid[i][j])) {
            continue;
          }

          if (alphaArr.includes(this.grid[i][j]) && this.grid[i][j] !== "o" && this.grid[i][j] !== "x" && !alreadyMade.includes(this.grid[i][j])) {
            alreadyMade.push(this.grid[i][j]);
            start = "".concat(j, " ").concat(i);

            for (var k = 0; k < 6; k++) {
              for (var l = 0; l < 6; l++) {
                if (this.grid[k][l] === this.grid[i][j] && "".concat(l, " ").concat(k) !== start) {
                  end = "".concat(l, " ").concat(k);
                }
              }
            }
          } else if (this.grid[i][j] === "x") {
            start = "".concat(j, " ").concat(i);
            end = "".concat(j, " ").concat(i);
          }

          var car = new _car["default"](this.grid[i][j], start, end);
          carArray.push(car);
        }
      }

      return carArray;
    }
  }, {
    key: "generateHTML",
    value: function generateHTML() {
      var carshtml = this.carsArr.map(function (car) {
        return "<div style=\"background-color:".concat(car.colour, ";\" class=\"car-").concat(car.orientation, "\"></div>");
      });
      var boardhtml = document.querySelector(".board").innerHTML = "\n      <div class=\"main-board\">\n        ".concat(carshtml.join(""), "\n      </div>\n    ");
    }
  }]);

  return Board;
}();

var medium = new _database["default"]();
medium.push("IBBxooIooLDDJAALooJoKEEMFFKooMGGHHHM");
medium.push("BBoKMxDDDKMoIAALooIoJLEEooJFFNoGGoxN");
medium.push("ooBBMxDDDKMoAAJKoNooJEENIFFLooIGGLox");
medium.push("ooBBMxDDDKMoAAJKoNooJEENIFFLooIGGLHH");
medium.push("oxCCMoDDDKMoAAJKooooJLEEIFFLoNIGGoxN");
medium.push("oooJLxCCCJLoHAAKooHoIKDDooIEEMoFFoxM");
medium.push("oooJxoCCCJLoHAAKLoHoIKDDooIEEMoFFoxM");
medium.push("BBBKCCDDoKoLIAAKoLIoJEEMFFJooMooxoHH");
medium.push("BBBCCNDDoxMNJAAoMOJoKFFOGGKLooxIILoo");
medium.push("ooBBoxDDDKooAAJKoMooJEEMIFFLooIGGLHH");
medium.push("ooBBoxDDDKooAAJKoMooJEEMIFFLooIGGLox");
medium.push("oxCCMNDDDKMNAAJKooooJEEoIFFLooIGGLox");
medium.push("oxCCMNDDDKMNAAJKooooJLEEIFFLooIGGHHo");
var board = new Board(medium[0]); //console.log(medium);
//board.setBoard("IBBxooIooLDDJAALooJoKEEMFFKooMGGHHHM");

console.log(board); //console.log(board.makeCarsArr("IBBxooIooLDDJAALooJoKEEMFFKooMGGHHHM"));

board.generateHTML();