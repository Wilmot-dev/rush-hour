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
    this.easy = this.setEasy();
    this.medium = this.setMedium();
    this.hard = this.setHard();
  }

  _createClass(Database, [{
    key: "setEasy",
    value: function setEasy() {
      var easyArr = [];
      easyArr.push("ooBoCCooBoooAABoooDDDooEoooooEoooooE");
      easyArr.push("ooBoooooBooCooBAACDDDEoCoooEFFoooooo");
      easyArr.push("BCDDEoBCFFEoAAGHooooGHIoooJHIoooJooo");
      easyArr.push("ooooooooBoCoAABoCDEEEoCDFGHoIIFGHoJJ");
      easyArr.push("ooBBBoCCCoDoAAooDEFFFoDEGoHoIIGoHoJJ");
      easyArr.push("ooooooooBooCAABooCDoBEEFDGGHIFJJJHIF");
      easyArr.push("ooBBCooDDDCEooAACEooFGGGooFHIIoooHJJ");
      var randomboard = Math.floor(Math.random() * 7);
      return easyArr[randomboard];
    }
  }, {
    key: "setMedium",
    value: function setMedium() {
      var mediumArr = [];
      mediumArr.push("oBCCDEoBFGDEAAFGHIJoKLHIJoKLoIJMMMNN");
      mediumArr.push("BooCooBooCDDBAAEooooFEGGooFHHIooFooI");
      mediumArr.push("BoCCCoBDDDEFAAGHEFIIGHEFoooJKKoLLJoo");
      mediumArr.push("BBoCoDEFoCoDEFAAGHIJJKGHIoLKGoIoLMMo");
      mediumArr.push("BCCDooBooDEEBAAFooooGFHHooGIIJooGooJ");
      mediumArr.push("BBBCDEFGGCDEFoAADoHHIooooJIoKKoJLLMM");
      mediumArr.push("BCCDDDBoEEFoAAGoFoHHGIIJoKKLoJMMMLoJ");
      var randomboard = Math.floor(Math.random() * 7);
      return mediumArr[randomboard];
    }
  }, {
    key: "setHard",
    value: function setHard() {
      var hardArr = [];
      hardArr.push("IBBxooIooLDDJAALooJoKEEMFFKooMGGHHHM");
      hardArr.push("BBoKMxDDDKMoIAALooIoJLEEooJFFNoGGoxN");
      hardArr.push("ooBBMxDDDKMoAAJKoNooJEENIFFLooIGGLox");
      hardArr.push("ooBBMxDDDKMoAAJKoNooJEENIFFLooIGGLHH");
      hardArr.push("oxCCMoDDDKMoAAJKooooJLEEIFFLoNIGGoxN");
      hardArr.push("oooJLxCCCJLoHAAKooHoIKDDooIEEMoFFoxM");
      hardArr.push("oooJxoCCCJLoHAAKLoHoIKDDooIEEMoFFoxM");
      hardArr.push("BBBKCCDDoKoLIAAKoLIoJEEMFFJooMooxoHH");
      var randomboard = Math.floor(Math.random() * 8);
      return hardArr[randomboard];
    }
  }]);

  return Database;
}();

var _default = Database;
exports["default"] = _default;