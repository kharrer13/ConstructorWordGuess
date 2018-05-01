var Letter = require("./Letter");

class Word {
  constructor(theWord) {
    (this.theWord = theWord), (this.letters = []), (this.underscores = []);
  }
  splitWord() {
    this.letters = this.theWord.split("");
  }
  genLetters() {
    for (let i = 0; i < this.letters.length; i++) {
      this.letters[i] = new Letter(this.letters[i]);
      this.letters[i].showChar();
    }
  }
  printWord() {
    console.log(this.letters.join(" "));
  }
}

module.exports = Word;
