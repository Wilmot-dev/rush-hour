class Database {
  constructor() {
    this.database = [];
    this.medium = this.setMedium();
  }

  push(item) {
    this.database.push(item);
  }

  setMedium() {
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
}

export default Database;