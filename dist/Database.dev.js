"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Database =
/*#__PURE__*/
function () {
  function Database() {
    _classCallCheck(this, Database);

    this.database = [];
    this.medium = this.setMedium();
  }

  _createClass(Database, [{
    key: "push",
    value: function push(item) {
      this.database.push(item);
    }
  }, {
    key: "setMedium",
    value: function setMedium() {
      this.database.push("IBBxooIooLDDJAALooJoKEEMFFKooMGGHHHM");
      this.database.push("BBoKMxDDDKMoIAALooIoJLEEooJFFNoGGoxN");
      this.database.push("ooBBMxDDDKMoAAJKoNooJEENIFFLooIGGLox");
      this.database.push("ooBBMxDDDKMoAAJKoNooJEENIFFLooIGGLHH");
      this.database.push("oxCCMoDDDKMoAAJKooooJLEEIFFLoNIGGoxN");
      this.database.push("oooJLxCCCJLoHAAKooHoIKDDooIEEMoFFoxM");
      this.database.push("oooJxoCCCJLoHAAKLoHoIKDDooIEEMoFFoxM");
      this.database.push("BBBKCCDDoKoLIAAKoLIoJEEMFFJooMooxoHH");
      this.database.push("BBBCCNDDoxMNJAAoMOJoKFFOGGKLooxIILoo");
      this.database.push("ooBBoxDDDKooAAJKoMooJEEMIFFLooIGGLHH");
      this.database.push("ooBBoxDDDKooAAJKoMooJEEMIFFLooIGGLox");
      this.database.push("oxCCMNDDDKMNAAJKooooJEEoIFFLooIGGLox");
      this.database.push("oxCCMNDDDKMNAAJKooooJLEEIFFLooIGGHHo");
      return this.database;
    }
  }]);

  return Database;
}();

var _default = Database;
exports["default"] = _default;