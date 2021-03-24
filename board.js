import Database from "./database.js";
import Car from "./car.js";

class Board {
  constructor(boardString) {
    this.grid = new Array(6).fill(new Array(6));
    this.carsArr = this.makeCarsArr("IBBxooIooLDDJAALooJoKEEMFFKooMGGHHHM");
  }

  setBoard(boardString) {
    for (let i = 0; i < 6; i++) {
      const variable = boardString.substring(i * 6, i * 6 + 6);
      this.grid[i] = variable.split(""); 
    }
  }

  makeCarsArr(boardString) {
    this.setBoard(boardString);
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
          start = `${j} ${i}`;
          for (let k = 0; k < 6; k++) {
            for (let l = 0; l < 6; l++) {
              if (this.grid[k][l] === this.grid[i][j] && `${l} ${k}` !== start) {
                end = `${l} ${k}`;
              }
            }
          }
        } else if (this.grid[i][j] === "x" ) {
          start = `${j} ${i}`;
          end = `${j} ${i}`;
        }
        const car = new Car(this.grid[i][j], start, end);
        carArray.push(car);
      } 
    }

    return carArray;
  }

  generateHTML() {
    const carshtml = this.carsArr.map(car => {
      return `<div style="background-color:${car.colour};" class="car-${car.orientation}"></div>`;
    });
    const boardhtml = document.querySelector(".board").innerHTML = `
      <div class="main-board">
        ${carshtml.join("")}
      </div>
    `;
  }

}




const medium = new Database();
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

const board = new Board(medium[0]);

//console.log(medium);
//board.setBoard("IBBxooIooLDDJAALooJoKEEMFFKooMGGHHHM");
console.log(board);
//console.log(board.makeCarsArr("IBBxooIooLDDJAALooJoKEEMFFKooMGGHHHM"));
board.generateHTML();