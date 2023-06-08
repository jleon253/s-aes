/**
 * Parametros: arrays de string con valores binarios
 * Cada array contendra 4bits
 * Ex: arrayBytes = ['1','0','0','1']
 *  */
const nibbleSubstitution = (arrayBytes = [], sBox = []) => {
  //"arrayBytes" array de 4 elementos
  let result = [];
  //  //console.log(arrayBytes);
  const column = binaryToDecimal(`${arrayBytes[0]}${arrayBytes[1]}`);
  //  //console.log("col:"+column);
  const row = binaryToDecimal(`${arrayBytes[2]}${arrayBytes[3]}`);
  //  //console.log("row:"+row);
  //busca el elemento en la caja correspondiente
  result = convertToBinary(sBox[column][row]);
  result = Array.from(result.padStart(4, "0"));
  //  //console.log("result:");
  //  //console.log(result);
  return result;
};

/**
 * Parametros: arrays de string con valores binarios
 * Cada array contendra 16bits
 * Ex: arrayBytes = ['1','0','0','1','1','1','0','1','1','1','0','1','1','1','0','1']
 *  */

const processNibbleSubstitution = (arrayBytes = [], sBox = []) => {
  let result = [];
  //  console.log('processNibbleSubstitution-Inicio:');
  //  console.log(arrayBytes);
  //  console.log('sBox:');
  //  console.log(sBox);
  result = result.concat(
    ...nibbleSubstitution(arrayBytes.slice(0, 4), sBox),
    ...nibbleSubstitution(arrayBytes.slice(4, 8), sBox),
    ...nibbleSubstitution(arrayBytes.slice(8, 12), sBox),
    ...nibbleSubstitution(arrayBytes.slice(12), sBox)
  );
  //  console.log('processNibbleSubstitution-Fin:');
   console.log('NibbleSubstitution:', result);
  return result;
};
