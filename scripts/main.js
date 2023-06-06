/**
 * msg y clave son de 16 bits : 2 caracteres
 */
const msg = '×(';
const key = 'Jõ';

/**
 * se crean arrays que contienen todos los bits
 * msgBinary = [1,0,0,1,0,1,0,1,1,0]
 */
const msgBinary = HexToBinary(AsciiToHex(msg)).join('').split('');
const keyBinary = HexToBinary(AsciiToHex(key)).join('').split('');

/**
 * Se invoca la función addKey
 */
const key0 = addKey(msgBinary, keyBinary);
shiftRows(processNibbleSubstitution(key0, sBox));