import Database from "./Database.js";

class Board {
  constructor() {
    this.grid = new Array(6).fill(new Array(6));
  }

  setBoard(boardString) {
    for (let i = 0; i < 6; i++) {
      const variable = boardString.substring(i * 6, i * 6 + 6);
      this.grid[i] = variable.split(""); 
    }
  }

  generateHTML() {

  }

  makeCarsArr(boardString) {
    this.setBoard(boardString);
    const alphaArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "o", "P", "Q", "R", "S", "T", "U", "V", "W", "x", "Y", "Z"];
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 6; j++) {
        if (this.grid[i][j] === /A-Z/ && this.grid[i][j] !== "o" && this.grid[i][j] !== "x") {
          
        }
      } 
    }
  }
}

const board = new Board;


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

console.log(medium);
board.setBoard("IBBxooIooLDDJAALooJoKEEMFFKooMGGHHHM");
console.log(board);