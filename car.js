class Car {
  constructor(letter, start, end) {
    this.letter = letter;
    this.start = start;
    this.end = end;
    this.orientation = this.setOrientation(start, end);
    this.colour = this.setColour();
    this.type = this.setType();
  }

  setOrientation(start, end) {
    start.split(" ");
    end.split(" ");
    if (start[0] === end[0]) {
      return "vertical";
    } else {
      return "horizontal";
    }
  }

  setColour() {
    switch (this.letter) {
      case "A":
        return "#e63946";
      case "x":
        return "#1d3557";
      default:
        return "#a8dadc";  
    }
  }
 
  setType() {
    switch (this.letter) {
      case "A":
        return "main-car";
      case "x":
        return "wall";
      default:
        return "other-car";  
    }
  }

}
//const newCar = new Car("I", "0 0", "0 1");
//console.log(newCar);


export default Car;