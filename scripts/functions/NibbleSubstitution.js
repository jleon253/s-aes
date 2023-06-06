const nibbleSubstitution = (decimales = 0, sBox = []) => {
    let bin = convertToBinary(decimales);
    let result=decimales;
    bin = bin.padStart(4, "0");
    //console.log("bin:"+bin);
    const column = binaryToDecimal(bin.slice(0,2));
    //console.log("col:"+column);
    const row = binaryToDecimal(bin.slice(2,4));
    //console.log("row:"+row);
    result = sBox[column][row];
    //console.log(result);
    return result;
}

