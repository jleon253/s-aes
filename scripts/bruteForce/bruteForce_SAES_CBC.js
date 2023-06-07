console.log('cipheredTexts', cipheredTexts);

let desCipheredTexts_Test = [];
const arrayKey_Test = [];
const textPlain = [];

const convertToAscii = (desCipheredTexts_Test) => {
    const processDesencryption = desCipheredTexts_Test.map((item) => item.join(''));
    return HexToAscii(splitByGroupsWithPadding(BinaryToHex(processDesencryption).join(''),2));
}

const CBCDecrypted_Test = (subKeys = []) => {
  let auxD = [];
  desCipheredTexts_Test = [];
  auxD = auxD.concat([ivBinary], cipheredTexts);
  for(let i = 0; i < cipheredTexts.length; i++) {
    desCipheredTexts_Test.push(XORbyByte(sAESDecryption(cipheredTexts[i], subKeys), auxD[i]))
  }
  textPlain.push(convertToAscii(desCipheredTexts_Test))
}

// for(let i = 0; i < cipheredTexts.length; i++) {
  for(let k = 42800; k < 42813; k++) {  // 65535 = FFFF
    let newKey = convertToBinary(k);
    newKey = newKey.toString().padStart(16, '0').split('');
    arrayKey_Test.push(newKey);

    const subKeys = keyExpansion(newKey)
    CBCDecrypted_Test(subKeys)
  }
// }

console.table(textPlain);

