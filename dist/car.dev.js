"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Car =
/*#__PURE__*/
function () {
  function Car(letter, start, end) {
    _classCallCheck(this, Car);

    this.letter = letter;
    this.start = start;
    this.end = end;
    this.orientation = this.setOrientation(start, end);
    this.colour = this.setColour();
    this.type = this.setType();
  }

  _createClass(Car, [{
    key: "setOrientation",
    value: function setOrientation(start, end) {
      start.split(" ");
      end.split(" ");

      if (start[0] === end[0]) {
        return "vertical";
      } else {
        return "horizontal";
      }
    }
  }, {
    key: "setColour",
    value: function setColour() {
      switch (this.letter) {
        case "A":
          return "#e63946";

        case "x":
          return "#1d3557";

        default:
          return "#a8dadc";
      }
    }
  }, {
    key: "setType",
    value: function setType() {
      switch (this.letter) {
        case "A":
          return "main-car";

        case "x":
          return "wall";

        default:
          return "other-car";
      }
    }
  }]);

  return Car;
}(); //const newCar = new Car("I", "0 0", "0 1");
//console.log(newCar);


var _default = Car;
exports["default"] = _default;