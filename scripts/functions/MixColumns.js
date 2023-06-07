/* const boxMix =[
    [1,4],
    [4,1]
]; */

const findMultication = (valueA = 0, valueB = 0, objectMixColumn = {}) => {
    return objectMixColumn[valueA][valueB];
}

const vectorMatrix = (s00 = [], s10 = [], boxMix = [], objectMixColumn = {}) => {
    console.log("vectormatrix-ini");
    console.log(s00); 
    console.log(s10); 
    console.log(boxMix); 
    console.log(objectMixColumn); 
}

/**
 * Parametros: arrays de string con valores binarios
 * Cada array contendra 16bits
 * Ex: arrayBytes = ['1','0','0','1','1','1','0','1','1','1','0','1','1','1','0','1']
 *  */ 

const mixColumn = (arrayBytes = [], boxMix = [], objectMixColumn = {}) => {
    const s00 = arrayBytes.slice(0, 4);
    const s10 = arrayBytes.slice(4, 8);
    const s01 = arrayBytes.slice(8, 12);
    const s11 = arrayBytes.slice(12);
    vectorMatrix(s00,s10, boxMix, objectMixColumn);
}