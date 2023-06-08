let msgBinaryx16 = [];
let msgBinaryx16Length = 0;
const cipheredTexts = []
const desCipheredTexts = []

const inputValues = () => {
  const msg = "Lorem ipsum dolor sit amet consectetur adipiscing elit Morbi hendrerits";
  const key = "§;";
  const iv = 'XD';

  const msgBinary = HexToBinary(AsciiToHex(msg)).join("").split("");
  const keyBinary = HexToBinary(AsciiToHex(key)).join("").split("");
  const ivBinary = HexToBinary(AsciiToHex(iv)).join("").split("");

  msgBinaryx16 = splitByGroupsWithPadding(msgBinary, 16, true);
  msgBinaryx16Length = msgBinaryx16.length;

  return { iv, ivBinary ,key, keyBinary, msg, msgBinary }
}

const sAESEncryption = (msgBinary = [], subKeys = {}) => {
  console.log('%cEncription proccess', 'background-color: yellow; color: red');

  console.log('*** Round Start ***');
  const array1 = addKey(msgBinary, subKeys[0]);
  // ---- Round 1 -------
  console.log('*** Round 1 ***');
  const array2 = processNibbleSubstitution(array1, sBox);
  const array3 = shiftRows(array2);
  const array4 = mixColumn(array3, boxMix);
  const array5 = addKey(array4, subKeys[1]);
  // ---- Round 2 -------
  console.log('*** Round 2 ***');
  const array6 = processNibbleSubstitution(array5, sBox);
  const array7 = shiftRows(array6);
  console.log('*** Round End ***');
  const cipherArray = addKey(array7, subKeys[2]);

  return cipherArray;
}

const sAESDecryption = (cipherArray = [], subKeys = {}) => {
  console.log('%cDecription proccess', 'background-color: green; color: black');
  
  console.log('*** Round Start ***');
  const array1 = addKey(cipherArray, subKeys[2]);
  // ---- Round 1 -------
  console.log('*** Round 1 ***');
  const array2 = shiftRows(array1);
  const array3 = processNibbleSubstitution(array2, inverseSBox);
  const array4 = addKey(array3, subKeys[1]);
  const array5 = mixColumn(array4, inverseBoxMix);
  // ---- Round 2 -------
  console.log('*** Round 2 ***');
  const array6 = shiftRows(array5);
  const array7 = processNibbleSubstitution(array6, inverseSBox);
  console.log('*** Round End ***');
  const textPlainArray = addKey(array7, subKeys[0]);
  
  return textPlainArray;
}

const CBCEncrypted = (ivBinary = [], subKeys = {}) => {
  const CBCEntry = XORbyByte(msgBinaryx16[0], ivBinary);

  for(let i = 0; i < msgBinaryx16Length; i++) {
    if(i > 0) {
      const XORCipherPlain = XORbyByte(cipheredTexts[i - 1], msgBinaryx16[i])
      cipheredTexts.push(sAESEncryption(XORCipherPlain, subKeys))
    } else {
      cipheredTexts.push(sAESEncryption(CBCEntry, subKeys))
    } 
  }
}

const CBCDecrypted = (ivBinary = [], subKeys = {}) => {
  let auxD = [];
  
  auxD = auxD.concat([ivBinary], cipheredTexts);
  for(let i = 0; i < cipheredTexts.length; i++) {
    desCipheredTexts.push(XORbyByte(sAESDecryption(cipheredTexts[i], subKeys), auxD[i]))
  }
}

const initS_AES_CBC = () => {
  const { ivBinary, key, keyBinary, msg, msgBinary} = inputValues();
  const subKeys = keyExpansion(keyBinary);

  CBCEncrypted(ivBinary, subKeys);
  CBCDecrypted(ivBinary, subKeys);
}

initS_AES_CBC()


const processDesencryption = desCipheredTexts.map((item) => item.join(''));
const textFinal = HexToAscii(splitByGroupsWithPadding(BinaryToHex(processDesencryption).join(''),2));

console.log('%cTexto desencriptado:', 'background-color: orange; color: black');
console.log(textFinal);
