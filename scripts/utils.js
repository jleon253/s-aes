// https://www.utilities-online.info/ascii-to-hex
const AsciiToHex = (str = '') => {
  return str.split('').map((val) => Number(val.charCodeAt(0)).toString(16));
}

// https://www.binaryhexconverter.com/hex-to-binary-converter
const HexToBinary = (hex = []) => {
  return hex.map((val) => parseInt(val, 16).toString((2)).padStart(8, '0'))
}

// https://binarytotext.net/binary-to-hexadecimal/
const BinaryToHex = (bin = []) => {
  return bin.map((val) => parseInt(val, 2).toString(16).toUpperCase())
}

// https://www.rapidtables.com/convert/number/hex-to-ascii.html
const HexToAscii = (hex = []) => {
  const arrHEXNum = hex.map((val) => parseInt(val, 16))
  const msgASCII = String.fromCharCode(...arrHEXNum)

  return msgASCII;
}


// -------- XOR Functions ------------

// https://xor.pw/#
const XORbyBit = (b1 = '', b2 = '') => {
  return `${b1 ^ b2}`;
}

// https://xor.pw/#
const XORbyByte = (B1 = [], B2 = []) => {
  const arrXOR = [];

  for(let i = 0; (i < B1.length) && (i < B2.length); i++) {
    arrXOR.push(XORbyBit(B1[i], B2[i]));
  }

  return arrXOR;
}

https://www.rapidtables.com/convert/number/decimal-to-binary.html
const convertToBinary = (number) => {
  let num = number;
  let binary = (num % 2).toString();
  for (; num > 1; ) {
      num = parseInt(num / 2);
      binary =  (num % 2) + (binary);
  }
  console.log(binary);
  return binary;
}

https://www.rapidtables.org/convert/number/binary-to-decimal.html
const binaryToDecimal = (binary = "0") => {
  return parseInt(binary, 2);
}
