"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

    this.boardString = boardString;
    this.movingCar = {};
    this.grid = this.setBoard();
    this.carsArr = this.makeCarsArr();
  }

  _createClass(Board, [{
    key: "setBoard",
    value: function setBoard() {
      var grid = new Array(6).fill(new Array(6));

      for (var i = 0; i < 6; i++) {
        var variable = this.boardString.substring(i * 6, i * 6 + 6);
        grid[i] = variable.split("");
      }

      return grid;
    }
  }, {
    key: "makeCarsArr",
    value: function makeCarsArr() {
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
            start = "".concat(i, " ").concat(j);

            for (var k = 0; k < 6; k++) {
              for (var l = 0; l < 6; l++) {
                if (this.grid[k][l] === this.grid[i][j] && "".concat(l, " ").concat(k) !== start) {
                  end = "".concat(k, " ").concat(l);
                }
              }
            }
          } else if (this.grid[i][j] === "x") {
            start = "".concat(i, " ").concat(j);
            end = "".concat(i, " ").concat(j);
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
        var rowstart = parseInt(car.start.split(" ")[0]) + 1;
        var rowend = parseInt(car.end.split(" ")[0]) + 2;
        var colstart = parseInt(car.start.split(" ")[1]) + 1;
        var colend = parseInt(car.end.split(" ")[1]) + 2;
        var iscar = "";

        if (car.type !== "wall") {
          iscar = "car";
        }

        return "\n      <div tabindex=\"-1\" style=\"background-color:".concat(car.colour, "; grid-row: ").concat(rowstart, " / ").concat(rowend, "; grid-column: ").concat(colstart, " / ").concat(colend, ";\" class=\"").concat(car.letter, " ").concat(iscar, " ").concat(car.type, " ").concat(car.orientation, "\"></div>\n      ");
      });
      var boardhtml = document.querySelector(".board").innerHTML = "\n      <div class=\"main-board\">\n        ".concat(carshtml.join(""), "\n      </div>\n    ");
      this.addEventListeners();
    }
  }, {
    key: "addEventListeners",
    value: function addEventListeners() {
      var _this = this;

      var cars = document.querySelectorAll(".car");

      for (var i = 0; i < cars.length; i++) {
        var car = cars[i];
        car.addEventListener("keydown", function (event) {
          _this.move(event);
        });
        car.addEventListener("click", function (event) {
          _this.setMovingCar(event.target);
        });
      }
    }
  }, {
    key: "move",
    value: function move(event) {
      if (this.movingCar.orientation === "vertical") {
        var col = parseInt(this.movingCar.start.split(" ")[1]);
        var rowstart = parseInt(this.movingCar.start.split(" ")[0]);
        var rowend = parseInt(this.movingCar.end.split(" ")[0]);

        if (event.code === "ArrowDown" && rowend !== 5) {
          if (this.grid[rowend + 1][col] === "o") {
            this.grid[rowend + 1][col] = this.movingCar.letter;
            this.grid[rowstart][col] = "o";
            this.carsArr = this.makeCarsArr();
            this.generateHTML();
          } else {
            console.log("sorry but you cant move there1");
          }
        } else if (event.code === "ArrowUp" && rowstart !== 0) {
          if (this.grid[rowstart - 1][col] === "o") {
            this.grid[rowstart - 1][col] = this.movingCar.letter;
            this.grid[rowend][col] = "o";
            this.carsArr = this.makeCarsArr();
            this.generateHTML();
          } else {
            console.log("sorry but you cant move there1");
          }
        } else {
          console.log("sorry but you cant move there2");
        }
      }

      if (this.movingCar.orientation === "horizontal") {
        var colstart = parseInt(this.movingCar.start.split(" ")[1]);
        var colend = parseInt(this.movingCar.end.split(" ")[1]);
        var row = parseInt(this.movingCar.start.split(" ")[0]);

        if (event.code === "ArrowRight" && colend !== 5) {
          if (this.grid[row][colend + 1] === "o") {
            this.grid[row][colend + 1] = this.movingCar.letter;
            this.grid[row][colstart] = "o";
            this.carsArr = this.makeCarsArr();
            this.generateHTML();
          } else {
            console.log("sorry but you cant move there3");
          }
        } else if (event.code === "ArrowLeft" && colstart !== 0) {
          if (this.grid[row][colstart - 1] === "o") {
            this.grid[row][colstart - 1] = this.movingCar.letter;
            this.grid[row][colend] = "o";
            this.carsArr = this.makeCarsArr();
            this.generateHTML();
          } else {
            console.log("sorry but you cant move there4");
          }
        } else {
          console.log("sorry but you cant move there5");
        }
      }

      var movedCar = document.querySelector(".".concat(this.movingCar.letter));
      this.setMovingCar(movedCar);
      movedCar.focus();

      if (parseInt(this.movingCar.end.split(" ")[1]) === 5 && this.movingCar.type === "main-car") {
        this.endgame();
      }
    }
  }, {
    key: "setMovingCar",
    value: function setMovingCar(htmlElement) {
      var _this2 = this;

      var carLetter = htmlElement.classList[0]; //console.log(htmlElement.classList[0]);

      this.carsArr.forEach(function (car) {
        if (carLetter === car.letter) {
          _this2.movingCar = car;
        }
      });
    }
  }, {
    key: "endgame",
    value: function endgame() {
      confetti({
        particleCount: 300
      });
      document.querySelector(".board").innerHTML = "\n    <div class=\"main-board\">\n      <p>WINNER!</p>\n    </div>\n  ";
      setTimeout(function () {
        location.reload(true);
      }, 4000);
    }
  }]);

  return Board;
}();

var _default = Board;
exports["default"] = _default;