class Database {
  constructor() {
    this.database = [];
    this.easy = this.setEasy();
    this.medium =this.setMedium();
    this.hard = this.setHard();
  }

  setEasy() {
    const easyArr = []
    easyArr.push("ooBoCCooBoooAABoooDDDooEoooooEoooooE");
    easyArr.push("ooBoooooBooCooBAACDDDEoCoooEFFoooooo");
    easyArr.push("BCDDEoBCFFEoAAGHooooGHIoooJHIoooJooo");
    easyArr.push("ooooooooBoCoAABoCDEEEoCDFGHoIIFGHoJJ");
    easyArr.push("ooBBBoCCCoDoAAooDEFFFoDEGoHoIIGoHoJJ");
    easyArr.push("ooooooooBooCAABooCDoBEEFDGGHIFJJJHIF");
    easyArr.push("ooBBCooDDDCEooAACEooFGGGooFHIIoooHJJ");
    const randomboard = Math.floor(Math.random() * 7);
    return easyArr[randomboard];
  }

  setMedium() {
    const mediumArr = []
    mediumArr.push("oBCCDEoBFGDEAAFGHIJoKLHIJoKLoIJMMMNN");
    mediumArr.push("BooCooBooCDDBAAEooooFEGGooFHHIooFooI");
    mediumArr.push("BoCCCoBDDDEFAAGHEFIIGHEFoooJKKoLLJoo");
    mediumArr.push("BBoCoDEFoCoDEFAAGHIJJKGHIoLKGoIoLMMo");
    mediumArr.push("BCCDooBooDEEBAAFooooGFHHooGIIJooGooJ");
    mediumArr.push("BBBCDEFGGCDEFoAADoHHIooooJIoKKoJLLMM");
    mediumArr.push("BCCDDDBoEEFoAAGoFoHHGIIJoKKLoJMMMLoJ");
    const randomboard = Math.floor(Math.random() * 7);
    return mediumArr[randomboard];
  }

  setHard() {
    const hardArr = []
    hardArr.push("IBBxooIooLDDJAALooJoKEEMFFKooMGGHHHM");
    hardArr.push("BBoKMxDDDKMoIAALooIoJLEEooJFFNoGGoxN");
    hardArr.push("ooBBMxDDDKMoAAJKoNooJEENIFFLooIGGLox");
    hardArr.push("ooBBMxDDDKMoAAJKoNooJEENIFFLooIGGLHH");
    hardArr.push("oxCCMoDDDKMoAAJKooooJLEEIFFLoNIGGoxN");
    hardArr.push("oooJLxCCCJLoHAAKooHoIKDDooIEEMoFFoxM");
    hardArr.push("oooJxoCCCJLoHAAKLoHoIKDDooIEEMoFFoxM");
    hardArr.push("BBBKCCDDoKoLIAAKoLIoJEEMFFJooMooxoHH");
    const randomboard = Math.floor(Math.random() * 8);
    return hardArr[randomboard];
  }
}

export default Database;