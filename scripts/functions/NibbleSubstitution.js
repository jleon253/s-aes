const nibbleSubstitution = (decimals = 0, sBox = []) => {
    let bin = convertToBinary(decimals);
    let result=decimals;
    //binario de 4 digitos
    bin = bin.padStart(4, "0");
    //console.log("bin:"+bin);
    const column = binaryToDecimal(bin.slice(0,2));
    //console.log("col:"+column);
    const row = binaryToDecimal(bin.slice(2,4));
    //console.log("row:"+row);
    //busca el elemento en la carta correspondiente
    result = sBox[column][row];
    //console.log(result);
    return result;
}

