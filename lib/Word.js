const Letter = require("./Letter");

class Word extends Letter {
  constructor(word) {
    super();
    this.word = word.split("");
    this.letters = this.convert();
  } 
 
  convert() {
    var newWord = [];
    for(var i = 0; i < this.word.length; i++) {
      newWord.push(new Letter(this.word[i]));
    }
    return newWord;
  }
}

module.exports = Word;
