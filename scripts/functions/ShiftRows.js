function shiftRows(arrKeyBinary =[]) {
    let result = [];
    const auxA = [];
    const auxB = [];
    const auxC = [];
    const auxD = [];
    //se separan en bloques de 4 elementos "bits" 
    //para poder trabajar con ellos y intercambiarlo
    auxA.push(...arrKeyBinary.slice(0, 4));
    auxB.push(...arrKeyBinary.slice(4, 8));
    auxC.push(...arrKeyBinary.slice(8, 12));
    auxD.push(...arrKeyBinary.slice(12));
    result = result.concat(auxA, auxD, auxC, auxB);
    return result;
}
