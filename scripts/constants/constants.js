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
