class Letter {
  constructor (char) {
    this.char = char;
    this.visible = this.charCheck();
    }

    charCheck() {
        const upper = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
        const lower = `abcdefghijklmnopqrstuvwxyz`;
        const digits = `0123456789`;
        if (upper.includes(this.char) || lower.includes(this.char) || digits.includes(this.char)) {
            return false;
        } else {
            return true;
        }
    }

    toString() {
        if (this.charCheck() === false) {
            return "_";
        } else {
            return this.char;
        }
    }

    guess(input) {
        if (input === this.char) {
            return true;
        } else {
            return false;
        }
    }

    getSolution() {
        return this.char;
    }
}

module.exports = Letter;
