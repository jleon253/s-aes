const shiftRows = (arrBytes = []) => {
  let result = [];
  //se intercambian los bloques
  result = result.concat(
    ...arrBytes.slice(0, 4),
    ...arrBytes.slice(12),
    ...arrBytes.slice(8, 12),
    ...arrBytes.slice(4, 8)
  );
  console.log('shiftRows:');
  console.log(result);
  return result;
};
