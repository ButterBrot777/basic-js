class VigenereCipheringMachine {

  constructor(directMachine) {
    if (typeof directMachine == 'undefined') {
      this.currentMachine = true;
    } else {
      this.currentMachine = directMachine;
    }
  }

  findChar(cipher, key) {
    let charPos = cipher.charCodeAt() - 65; // 65 id charCode of 'A'
    let keyPos = key.charCodeAt() - 65;

    let encryptPos = charPos + keyPos;
    if (encryptPos >= 26) { // 26 is the length of alphabet
      encryptPos = encryptPos - 26; 
    }
    return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.substr(encryptPos, 1);
  }

  findSymbol(cipher, key) {
    let charPos = cipher.charCodeAt() - 65;
    let keyPos = key.charCodeAt() - 65;

    let decryptPos = charPos - keyPos;
    if (decryptPos < 0) { decryptPos = 26 - Math.abs(decryptPos); }
    return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.substr(decryptPos, 1);
  }

  encrypt(input, key) {

  if (!input || !key) {
    throw new Error('input data is not defined');
  }

      let result = [];
      let increment = 0;
      let keyLength = key.length - 1;
      input = input.toUpperCase().split('');
      key = key.toUpperCase().split('');
      if (!this.currentMachine) input.reverse();
      input.forEach(element => {
          if (/^[A-Z]$/.test(element)) {
              result.push(this.findChar(element, key[increment]));
              increment = (increment < keyLength) ? increment += 1 : 0;
          } else result.push(element);
      });
      return result.join('');
  }

  decrypt(input, key) {
    if (!input || !key) {
      throw new Error('input data is not defined');
    }
    let result = [];
    let increment = 0;
    let keyLength = key.length - 1;
    input = input.toUpperCase().split('');
    key = key.toUpperCase().split('');
    if (!this.currentMachine) input.reverse();
    input.forEach(element => {
      if (/^[A-Z]$/.test(element)) {
        result.push(this.findSymbol(element, key[increment]));
        increment = (increment < keyLength) ? increment += 1 : 0;
      } else result.push(element);
    });
    return result.join('');
  }
}

module.exports = VigenereCipheringMachine;