// https://www.utilities-online.info/ascii-to-hex
const AsciiToHex = (str = '') => {
  return str.split('').map((val) => Number(val.charCodeAt(0)).toString(16));
}

// https://www.binaryhexconverter.com/hex-to-binary-converter
const HexToBinary = (hex = []) => {
  return hex.map((val) => parseInt(val, 16).toString((2)).padStart(8, '0'))
}

// https://binarytotext.net/binary-to-hexadecimal/
/**
 * 
 * @param bin: is an array string with n groups of 8 binary numbers: ['10011010', '11100010'] 
 * @returns an array string with n groups of HEX numbers: ['A3','1F']
 */
const BinaryToHex = (bin = []) => {
  return bin.map((val) => parseInt(val, 2).toString(16))
}

// https://www.rapidtables.com/convert/number/hex-to-ascii.html
/**
 * 
 * @param hex: is an array string with n groups of 2 HEX numbers: ['A3', '1F'] 
 * @returns an string with a text in ASCII format
 */
const HexToAscii = (hex = []) => {
  const arrHEXNum = hex.map((val) => parseInt(val, 16))
  const msgASCII = String.fromCharCode(...arrHEXNum)

  return msgASCII;
}

const HexToAsciiB = (str = []) => {
  return str
    .map((val) => {
      return String.fromCharCode(parseInt(val, 16))
    })
    .join('');
};

/**
 * 
 * @param bin: is an array string of 16 elements between 1 and 0
 * @returns a string with characters in ASCII format
 */
const BinaryToAscii = (bin = []) => {
  return HexToAscii(BinaryToHex(splitArrayByGroups(bin, 8).map(arr => arr.join(''))))
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

// https://www.rapidtables.com/convert/number/decimal-to-binary.html
const convertToBinary = (number) => {
  let num = number;
  let binary = (num % 2).toString();
  for (; num > 1; ) {
      num = parseInt(num / 2);
      binary =  (num % 2) + (binary);
  }
  return binary;
}

// https://www.rapidtables.org/convert/number/binary-to-decimal.html
const binaryToDecimal = (binary = "0") => {
  return parseInt(binary, 2);
}

const zeroPadding = (msg) => {
  if (((msg.length)%16) == 0) {
    msg=+ '0';
  }
}

const processPaddingBits = (arrayToPadding = [],numberBitsToPadding = 0) => {
   for(let i = 0; i < numberBitsToPadding; i ++) {
    arrayToPadding.push("0");
   }
};

const splitByGroupsWithPadding = (array = [], size = 4, padding = false) => {
  let groups = [];
  let lastIndex = 0;
  for(let i = 0; i < array.length; i += size) {
    groups.push(array.slice(i, i + size));
    lastIndex = lastIndex + 1;
  }
  if (padding && ((groups[lastIndex-1].length) != size)) {
    processPaddingBits(groups[lastIndex-1],(size-groups[lastIndex-1].length) );
  }
  return groups;
}

const splitArrayByGroups = (array = [], size = 4) => {
  let groups = [];
  for(let i = 0; i < array.length; i += size) {
    groups.push(array.slice(i, i + size));
  }

  return groups;
}
