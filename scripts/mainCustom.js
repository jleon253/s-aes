/**
 * msg y clave son de 16 bits : 2 caracteres
 */
let msg = "Lo";
//let msg = "Lorem ipsum dolor sit amet consectetur adipiscing elit Morbi hendrerits";
const key = "§;";
const iv = 'XD';

/**
 * se crean arrays que contienen todos los bits
 * msgBinary = [1,0,0,1,0,1,0,1,1,0]
 */
console.log('Texto original:',msg );
const msgBinary = HexToBinary(AsciiToHex(msg)).join("").split("");
//console.log('msgBinary', msgBinary);
const keyBinary = HexToBinary(AsciiToHex(key)).join("").split("");

const ivBinary = HexToBinary(AsciiToHex(iv)).join("").split("");
//console.log('ivBinary', ivBinary);
const msgBinaryx16 = splitByGroups(msgBinary, 16, true);
const msgBinaryx16Length = msgBinaryx16.length;
//console.log('msgBinaryx16', msgBinaryx16);
//console.log('msgBinaryx16..join()', msgBinaryx16.join());


const sAESEncryption = (msgBinary = [], subKeys = {}) => {
  // const subKeys = keyExpansion(keyBinary); // no repetir
  const array1 = addKey(msgBinary, subKeys[0]);
  // ---- Round 1 -------
  const array2 = processNibbleSubstitution(array1, sBoxCustom);
  const array3 = shiftRowsCustom(array2);
  const array4 = mixColumn(array3, boxMixCustom);
  const array5 = addKey(array4, subKeys[1]);
  // ---- Round 2 -------
  const array6 = processNibbleSubstitution(array5, sBoxCustom);
  const array7 = shiftRowsCustom(array6);
  const cipherArray = addKey(array7, subKeys[2]);

  //console.log('cipherArray', cipherArray);
  return cipherArray;
}

const sAESDecryption = (cipherArray = [], subKeys = {}) => {
  //console.warn('------ sAESDecryption -------');
  //const subKeys = keyExpansion(keyBinary);
  const array1 = addKey(cipherArray, subKeys[2]);
  // ---- Round 1 -------
  const array2 = shiftRowsCustom(array1);
  const array3 = processNibbleSubstitution(array2, inverseSBoxCustom);
  const array4 = addKey(array3, subKeys[1]);
  const array5 = mixColumn(array4, inverseBoxMixCustom);
  // ---- Round 2 -------
  const array6 = shiftRowsCustom(array5);
  const array7 = processNibbleSubstitution(array6, inverseSBoxCustom);
  const textPlainArray = addKey(array7, subKeys[0]);
  //console.log('textPlainArrayBinary', textPlainArray);
  return textPlainArray;
}

// const cipherArray = sAESEncryption();
// const textPlainArray = sAESDecryption(cipherArray);


const subKeys = keyExpansion(keyBinary);
const cipheredTexts = []
const desCipheredTexts = []

const CBCEncrypted = () => {
  const CBCEntry = XORbyByte(msgBinaryx16[0], ivBinary);
  //console.log('CBCEntry', CBCEntry);
  //cipheredTexts.push(CBCEntry);

  for(let i = 0; i < msgBinaryx16Length; i++) {
    if(i > 0) {
      const XORCipherPlain = XORbyByte(cipheredTexts[i - 1], msgBinaryx16[i])
      cipheredTexts.push(sAESEncryption(XORCipherPlain, subKeys))
    } else {
      cipheredTexts.push(sAESEncryption(CBCEntry, subKeys))
    } 
  }
  //console.log('cipheredTexts', cipheredTexts);
}
CBCEncrypted();

const CBCDecrypted = () => {
  let auxD =[];
  //console.log('cipheredTexts',cipheredTexts);
  //console.log('ivBinary',ivBinary);
  auxD = auxD.concat([ivBinary], cipheredTexts);
  //console.log('auxD', auxD);
  for(let i = 0; i < cipheredTexts.length; i++) {
    desCipheredTexts.push(XORbyByte(sAESDecryption(cipheredTexts[i], subKeys), auxD[i]))
  }
  //console.log('desCipheredTexts.join()', desCipheredTexts.join());
  //console.log('desCipheredTexts', desCipheredTexts);
}

console.warn('Desencriptar');
CBCDecrypted();
const processDesencryption = desCipheredTexts.map((item) => item.join(''));
//console.log('processDesencryption',processDesencryption);
const textFinal = HexToAscii(splitByGroups(BinaryToHex(processDesencryption).join(''),2));

console.log('Texto desencriptado:',textFinal);
