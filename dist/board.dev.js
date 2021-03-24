"use strict";

var _Database = _interopRequireDefault(require("./Database.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Board =
/*#__PURE__*/
function () {
  function Board() {
    _classCallCheck(this, Board);

    this.grid = new Array(6).fill(new Array(6));
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
    key: "generateHTML",
    value: function generateHTML() {}
  }, {
    key: "makeCarsArr",
    value: function makeCarsArr(boardString) {
      this.setBoard(boardString);
      var alphaArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "o", "P", "Q", "R", "S", "T", "U", "V", "W", "x", "Y", "Z"];

      for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 6; j++) {
          if (this.grid[i][j] === /A-Z/ && this.grid[i][j] !== "o" && this.grid[i][j] !== "x") {}
        }
      }
    }
  }]);

  return Board;
}();

var board = new Board();
var medium = new _Database["default"]();
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
console.log(medium);
board.setBoard("IBBxooIooLDDJAALooJoKEEMFFKooMGGHHHM");
console.log(board);