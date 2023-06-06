function shiftRowsBinario(arrBinary =[]) {
    let result = [];
    const auxA = [];
    const auxB = [];
    const auxC = [];
    const auxD = [];
    //se separan en bloques de 4 elementos "bits" 
    //para poder trabajar con ellos y intercambiarlo
    auxA.push(...arrBinary.slice(0, 4));
    auxB.push(...arrBinary.slice(4, 8));
    auxC.push(...arrBinary.slice(8, 12));
    auxD.push(...arrBinary.slice(12));
    //se intercambian los bloques
    result = result.concat(auxA, auxD, auxC, auxB);
    return result;
}

function shiftRowsDecimal(arrDecimal =[]) {
    //los decimales del array es de 0 - 15
    let result = [];
    //se intercambian los bloques de 4 bit
    result = result.concat(...arrDecimal[0], ...arrDecimal[3], ...arrDecimal[2], ...arrDecimal[1]);
    return result;
}
