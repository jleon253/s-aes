
/**
 * Parametros: arrays de string con valores binarios
 * Cada array contendra 16bits en grupos de 4 bits
 * Ex: state = ['1101','0111','0010','1000']
 *  */ 
const addKey = (state = [], key = []) => {
  const result = XORbyByte(state, key);
  console.log('addKey:');
  console.log(splitByGroups(result));

  return result;
}
