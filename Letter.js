class Letter {
    constructor(char) {
        this.char = char.toUpperCase(),
        this.guessed = false
    }
    showChar() {
        if (this.guessed) {
            console.log(this.char);
        } else {
            console.log('_');
        }
    }
    showChar(guess) {
        if (guess === this.char) {
            this.guessed = true;
        }
        return guessed;
    }
}

module.exports = Letter;