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
      <div tabindex="-1" style="background-color:${car.colour}; grid-row: ${rowstart} / ${rowend}; grid-column: ${colstart} / ${colend};" class="${car.letter} ${iscar} ${car.type} ${car.orientation}"></div>
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
      car.addEventListener("keydown", (event) => {this.move(event)});
      car.addEventListener("click", (event) => {this.setMovingCar(event.target)}); 
    }
  }

  move(event) {

    if (this.movingCar.orientation === "vertical") {
      const col = parseInt(this.movingCar.start.split(" ")[1]);
      const rowstart = parseInt(this.movingCar.start.split(" ")[0]);
      const rowend = parseInt(this.movingCar.end.split(" ")[0]);

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
      const colstart = parseInt(this.movingCar.start.split(" ")[1]);
      const colend = parseInt(this.movingCar.end.split(" ")[1]);
      const row = parseInt(this.movingCar.start.split(" ")[0]);

      if (event.code === "ArrowRight" && colend !== 5) {

        if (this.grid[row][colend + 1] === "o") {
          this.grid[row][colend + 1] = this.movingCar.letter;
          this.grid[row][colstart] = "o";
          this.carsArr = this.makeCarsArr();
          this.generateHTML();
        } else {
          console.log("sorry but you cant move there3");
        }
        
      } else if (event.code === "ArrowLeft" && colstart !== 0 ) {

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
    const movedCar = document.querySelector(`.${this.movingCar.letter}`);
    this.setMovingCar(movedCar);
    movedCar.focus();

    if (parseInt(this.movingCar.end.split(" ")[1]) === 5 && this.movingCar.type === "main-car") {
      this.endgame();
    }
  }

  setMovingCar(htmlElement) {
    const carLetter = htmlElement.classList[0];
    //console.log(htmlElement.classList[0]);
    this.carsArr.forEach(car => {
      if (carLetter === car.letter) {
        this.movingCar = car;
      }
    });
  };

  endgame() {
    confetti({
      particleCount: 300
    });
    document.querySelector(".board").innerHTML = `
    <div class="main-board">
      <p>WINNER!</p>
    </div>
  `;
  }

}

export default Board;