/* Tabla que representa las multiplicaciones
en el algoritmo s-aes y que no salen del
x^4+x+1
const objectMixColumn = {
    1: [1,2,3,4,5,6,7,8,9,A,B,C,D,E,F],
    2: [2,4,6,8,A,C,E,3,1,7,5,B,9,F,D],
    4: [4,8,C,3,7,B,F,6,2,E,A,5,1,D,9],
    9: [9,1,8,2,B,3,A,4,D,5,C,6,F,7,E]
};
*/
const objectMixColumn = {
    1: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
    2: [2,4,6,8,10,12,14,3,1,7,5,11,9,15,13],
    4: [4,8,12,3,7,11,15,6,2,14,10,5,1,13,9],
    9: [9,1,8,2,11,3,10,4,13,5,12,6,15,7,14]
};

const findMultication = (valueA = 0, valueB = 0) => {
  console.log("valueA");
  console.log(valueA);
  console.log("valueB");
  console.log(valueB);
  console.log(objectMixColumn[valueA][valueB]);
  return objectMixColumn[valueA][valueB];
};

const vectorMatrix = (
  s00 = [],
  s10 = [],
  boxMix = []
) => {
  console.log("vectormatrix-ini");
  console.log(s00);
  console.log(s10);
  console.log(boxMix);
  console.log(objectMixColumn);
  let result = [];
  console.log(s00.join(''));
  let numberS00 = binaryToDecimal(s00.join(''));
  let numberS10 = binaryToDecimal(s10.join(''));
  console.log("text");
  result[0] = convertToBinary(
    XORbyBit(
      findMultication(boxMix[0][0], (numberS00-1), objectMixColumn),
      findMultication(boxMix[0][1], (numberS10-1), objectMixColumn)
    )
  ).padStart(4,'0');
  result[1] = convertToBinary(
    XORbyBit(
      findMultication(boxMix[1][0], (numberS00-1), objectMixColumn),
      findMultication(boxMix[1][1], (numberS10-1), objectMixColumn)
    )
  ).padStart(4,'0');
  console.table(result);
  return result;
};

/**
 * Parametros: arrays de string con valores binarios
 * Cada array contendra 16bits
 * Ex: arrayBytes = ['1','0','0','1','1','1','0','1','1','1','0','1','1','1','0','1']
 *  */

const mixColumn = (arrayBytes = [], boxMix = []) => {
  let result = [];
  const s00 = arrayBytes.slice(0, 4);
  const s10 = arrayBytes.slice(4, 8);
  const s01 = arrayBytes.slice(8, 12);
  const s11 = arrayBytes.slice(12);
  result.push(vectorMatrix(s00, s10, boxMix, objectMixColumn).join('').split(''));
  result.push(vectorMatrix(s01, s11, boxMix, objectMixColumn).join('').split(''));
  
  console.log(result.flat());
  return result.flat();
};
