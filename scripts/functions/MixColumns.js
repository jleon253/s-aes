/* const boxMix =[
    [1,4],
    [4,1]
]; */

const findMultication = (valueA = 0, valueB = 0, objectMixColumn = {}) => {
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
  boxMix = [],
  objectMixColumn = {}
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

const mixColumn = (arrayBytes = [], boxMix = [], objectMixColumn = {}) => {
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
