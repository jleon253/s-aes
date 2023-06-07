//algoritmo s-aes

//box
/*const SBox = 
[['9','4','A','B'],
['D','1','8','5'],
['6','2','0','3'],
['C','E','F','7']];*/
const sBox = 
[[9,4,10,11],
[13,1,8,5],
[6,2,0,3],
[12,14,15,7]];

//inver box
/*const IsBox = [
['A','5','9','A'],
['1','7','8','F'],
['6','0','2','3'],
['C','4','D','E']];*/
const inverseSBox = [
    [10,5,9,10],
    [1,7,8,15],
    [6,0,2,3],
    [12,4,13,14]];

//cajas de mixColumn
const boxMix =[
    [1,4],
    [4,1]
];

const inverseBoxMix = [
    [9,2],
    [2,9]
];

/**
 * RCON(i) = x^(i+2)
 * Los restantes 4 bits, se rellenan con ceros
 */
const RCON = {
  1: ['1','0','0','0','0','0','0','0'], // x^3 : 1000
  2: ['0','0','1','1','0','0','0','0'], // x^4 : 0011
}

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
