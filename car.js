class Car {
  constructor(letter, start, end) {
    this.letter = letter;
    this.start = start;
    this.end = end;
    this.orientation = this.setOrientation(start, end);
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

}
const newCar = new Car("I", "0 0", "0 1");
console.log(newCar);


export default Car;