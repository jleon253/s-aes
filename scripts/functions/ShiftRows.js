const shiftRowsBinario = (arrBinary =[]) => {
    let result = [];
    //se intercambian los bloques
    result = result.concat(
        ...arrBinary.slice(0, 4), 
        ...arrBinary.slice(12), 
        ...arrBinary.slice(8, 12), 
        ...arrBinary.slice(4, 8));
    return result;
}

const shiftRowsDecimal = (arrDecimal =[]) => {
    //los decimales del array es de 0 - 15
    let result = [];
    //se intercambian los bloques de 4 bit
    result = result.concat(...arrDecimal[0], ...arrDecimal[3], ...arrDecimal[2], ...arrDecimal[1]);
    return result;
}
