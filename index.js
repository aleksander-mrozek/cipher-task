// a - z => 97 - 122
// A to Z => 65 - 90

class ShiftCipher {
  constructor(shift) {
    this.shift = shift;
  }
  encrypt(original) {
    let enArray = [];
    for (let i = 0; i < original.length; i++) {
      let enUnicode = original[i].charCodeAt();
      if (enUnicode >= "a".charCodeAt() && enUnicode <= "z".charCodeAt()) {
        if (enUnicode + this.shift > "z".charCodeAt()) {
          enArray.push(String.fromCharCode(enUnicode + this.shift - 26));
        } else {
          enArray.push(String.fromCharCode(enUnicode + this.shift));
        }
      } else {
        enArray.push(original[i]);
      }
    }
    return enArray.join("").toUpperCase();
  }
  decrypt(encrypted) {
    let deArray = [];
    for (let j = 0; j < encrypted.length; j++) {
      let deUnicode = encrypted[j].charCodeAt();
      if (deUnicode >= "A".charCodeAt() && deUnicode <= "Z".charCodeAt()) {
        if (deUnicode - this.shift < "A".charCodeAt()) {
          deArray.push(String.fromCharCode(deUnicode - this.shift + 26));
        } else {
          deArray.push(String.fromCharCode(deUnicode - this.shift));
        }
      } else {
        deArray.push(encrypted[j]);
      }
    }
    return deArray.join("").toLowerCase();
  }
}

// check

const cipher = new ShiftCipher(5);

console.log(cipher.encrypt("this will be encrypted!"));
console.log(cipher.decrypt("YMNX BNQQ GJ JSHWDUYJI!"));
