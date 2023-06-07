/**
 * w_i: array string de 8 posiciones con valores entre 0 y 1
 */
const RotNib = (w_i = []) => {
  const N0 = w_i.slice(0, 4);
  const N1 = w_i.slice(4, 8);
  const result = [N1, N0]
  //console.log('RotNib:', result);
  return result;
}

/**
 * nibs: array string de 8 posiciones con valores entre 0 y 1
 */
const SubNib = (nibs = []) => {
  const result = nibs.map(nib => nibbleSubstitution(nib, sBox)).flat()
  //console.log('SubNib:', result);
  return result;
}

/**
 * w_i: array string de 8 posiciones con valores entre 0 y 1
 * indexRCON: RCON(i)
 */
const gFunction = (w_i = [], indexRCON = 1) => {
  const firstXOR = XORbyByte(RCON[indexRCON], SubNib(RotNib(w_i)))
  //console.log({firstXOR});
  return firstXOR;
}

/**
 * initialKey: array string de 16 posiciones con valores entre 0 y 1
 */
const keyExpansion = (initialKey = []) => {
  //console.log('keyExpansion:');

  const w0 = initialKey.slice(0, 8);
  const w1 = initialKey.slice(8, 16);
  const w2 = XORbyByte(w0, gFunction(w1, 1))
  const w3 = XORbyByte(w2, w1)
  const w4 = XORbyByte(w2, gFunction(w3, 2))
  const w5 = XORbyByte(w4, w3)
  const subKeys = {
    0: w0.concat(w1),
    1: w2.concat(w3),
    2: w4.concat(w5),
  }
  //console.log('subKeys', subKeys);
  return subKeys
}


// keyExpansion(['0','0','1','0','1','1','0','1','0','1','0','1','0','1','0','1'])