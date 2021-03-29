import Car from "./car.js";


class Board {
  constructor(boardString) {
    this.boardString = boardString;
    this.movingCar = {};
    this.grid = this.setBoard(); 
    this.carsArr = this.makeCarsArr();
  }

  setBoard() {
    const grid = new Array(6).fill(new Array(6));
    for (let i = 0; i < 6; i++) {
      const variable = this.boardString.substring(i * 6, i * 6 + 6);
      grid[i] = variable.split(""); 
    }
    return grid;
  }

  makeCarsArr() {
    const alphaArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "o", "P", "Q", "R", "S", "T", "U", "V", "W", "x", "Y", "Z"];
    const alreadyMade = [];
    const carArray = [];
    let start;
    let end;

    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 6; j++) {
        if(this.grid[i][j] === "o" || alreadyMade.includes(this.grid[i][j])){
          continue;
        } 
        if (alphaArr.includes(this.grid[i][j]) && this.grid[i][j] !== "o" && this.grid[i][j] !== "x" && !alreadyMade.includes(this.grid[i][j])) {
          alreadyMade.push(this.grid[i][j]);
          start = `${i} ${j}`;
          for (let k = 0; k < 6; k++) {
            for (let l = 0; l < 6; l++) {
              if (this.grid[k][l] === this.grid[i][j] && `${l} ${k}` !== start) {
                end = `${k} ${l}`;
              }
            }
          }
        } else if (this.grid[i][j] === "x" ) {
          start = `${i} ${j}`;
          end = `${i} ${j}`;
        }
        const car = new Car(this.grid[i][j], start, end);
        carArray.push(car);
      } 
    }

    return carArray;
  }

  generateHTML() {
    const carshtml = this.carsArr.map(car => {
      const rowstart = parseInt(car.start.split(" ")[0]) + 1;
      const rowend = parseInt(car.end.split(" ")[0]) + 2;
      const colstart = parseInt(car.start.split(" ")[1]) + 1;
      const colend = parseInt(car.end.split(" ")[1]) + 2;
      let iscar = "";
      if (car.type !== "wall") {
        iscar = "car";
      }

      return `
      <div style="background-color:${car.colour}; grid-row: ${rowstart} / ${rowend}; grid-column: ${colstart} / ${colend};" class="${car.letter} ${iscar} ${car.type} ${car.orientation}"></div>
      `;
    });
    const boardhtml = document.querySelector(".board").innerHTML = `
      <div class="main-board">
        ${carshtml.join("")}
      </div>
    `;
    this.addEventListeners();
  }

  addEventListeners() {
    const cars = document.querySelectorAll(".car");
    for (let i = 0; i < cars.length; i++) {
      const car = cars[i];
      car.addEventListener("click", (event) => {this.setMovingCar(event)}); 
      car.addEventListener("keydown", (event) => {this.move(event)});
    }
  }

  move(event) {
    //check orientation
    if (this.movingCar.orientation === "vertical") {
      //only move up/down left/right
      if (event.code === "ArrowDown") {
        //check if can move that way
        //let the block move that way
      } else if (event.code === "ArrowUp") {

      }
    }
    
  }

  setMovingCar(event) {
    //figure out which div it is
    const carLetter = event.target.classList[0];
    // console.log(event.target.classList[0]);
    // console.log(this.carsArr);
    // console.log(this);
    this.carsArr.forEach(car => {
      if (carLetter === car.letter) {
        this.movingCar = car;
      }
    });
  };

}

export default Board;