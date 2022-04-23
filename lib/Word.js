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

  guessLetter(guess) {
    if(this.word.includes(guess)) {
      return true;
    } else {
      return false;
    }
  }

  guessedCorrectly() {
    var check = [];
    for(var i = 0; i < this.letters.length; i++) {
      if (this.letters[i].char === this.word[i]) {
        check.push(this.letters[i].char);
      }
    }
    
    if (check === this.word) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Word;
