const Letter = require("./Letter");

class Word extends Letter {
  constructor(word) {
    super(char);
    this.letters = this.change();
    this.word = word.split("");

  } 
 
  change() {
    
  }
}

module.exports = Word;
