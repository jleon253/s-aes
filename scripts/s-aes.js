let cipherArrayBinaryFinal = [];
let descipherArrayBinaryFinal = [];

const inputValues = () => {
  const msg = "ok";
  const key = "§;";

  const msgBinary = HexToBinary(AsciiToHex(msg)).join("").split("");
  const keyBinary = HexToBinary(AsciiToHex(key)).join("").split("");

  return { key, keyBinary, msg, msgBinary }
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
  const cipherArrayBinary = addKey(array7, subKeys[2]);

  return cipherArrayBinary;
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

const initS_AES = () => {
  const {key, keyBinary, msg, msgBinary} = inputValues();
  const subKeys = keyExpansion(keyBinary);
  
  cipherArrayBinaryFinal = sAESEncryption(msgBinary, subKeys)
  descipherArrayBinaryFinal = sAESDecryption(cipherArrayBinaryFinal, subKeys)

  console.table({
    'msg': msg,
    'msg binary': msgBinary.join(''),
    'key': key,
    'key binary': keyBinary.join(''),
    'Cipher Text': BinaryToAscii(cipherArrayBinaryFinal),
    'Cipher binary': cipherArrayBinaryFinal.join(''),
    'Descipher Text': BinaryToAscii(descipherArrayBinaryFinal),
    'Descipher binary': descipherArrayBinaryFinal.join('')
  });
}

initS_AES();