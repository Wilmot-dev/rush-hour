"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Car = function Car(length, colour, startPos) {
  _classCallCheck(this, Car);

  this.length = length;
  this.colour = colour;
  this.startPos = startPos;
  this.segments = [startPos];
};