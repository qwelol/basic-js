const LETTERS = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function makeRepeatedKey(source, key) {
  let repeatedKey = "";
  let counter = 0;
  for (let i = 0; i < source.length; i++) {
    let index = LETTERS.indexOf(source[i]);
    if (index !== -1) {
      if (i - counter < key.length) {
        repeatedKey += key[i - counter].toUpperCase();
      } else {
        let multiplier = Math.floor((i - counter) / key.length);
        repeatedKey += key[i - counter - key.length * multiplier].toUpperCase();
      }
    } else {
      repeatedKey += " ";
      counter++;
    }
  }
  return repeatedKey;
}

class VigenereCipheringMachine {
  constructor(type = true) {
    this.type = type;
  }
  encrypt(message, key) {
    let result = [];
    if (message && key) {
      let source = message.toUpperCase();
      let repeatedKey = makeRepeatedKey(source, key);
      for (let i = 0; i < source.length; i++) {
        let index = LETTERS.indexOf(source[i]);
        let keyIndex = LETTERS.indexOf(repeatedKey[i]);
        if (index !== -1) {
          if (index + keyIndex < LETTERS.length) {
            result.push(LETTERS[index + keyIndex]);
          } else {
            result.push(LETTERS[index + keyIndex - LETTERS.length]);
          }
        } else {
          result.push(source[i]);
        }
      }
    } else {
      throw new Error();
    }
    return this.type ? result.join("") : result.reverse().join("");
  }
  decrypt(encryptedMessage, key) {
    let result = [];
    if (encryptedMessage && key) {
      let repeatedKey = makeRepeatedKey(encryptedMessage, key);
      for (let i = 0; i < encryptedMessage.length; i++) {
        let index = LETTERS.indexOf(encryptedMessage[i]);
        let keyIndex = LETTERS.indexOf(repeatedKey[i]);
        if (index !== -1) {
          if (index - keyIndex >= 0) {
            result.push(LETTERS[index - keyIndex]);
          } else {
            result.push(LETTERS[LETTERS.length + index - keyIndex]);
          }
        } else {
          result.push(encryptedMessage[i]);
        }
      }
    } else {
      throw new Error();
    }
    return this.type ? result.join("") : result.reverse().join("");
  }
}

module.exports = VigenereCipheringMachine;
