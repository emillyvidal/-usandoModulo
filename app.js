/* app.js */

const { circleArea , squareArea } = require('./shape-area');

// Opção 1: importe todo o modulo shape-area.js aqui
// Opção 2: importe as funções circleArea() e squareArea() usando a desestruturação de objetos aqui

const raioInput = process.argv[2];
const ladoInput = process.argv[3];

const circleAreaValue = circleArea (raioInput);
const squareAreaValue = squareArea (ladoInput);

console.log(`${raioInput} Área do círculo = ${circleAreaValue} `);
console.log(`${ladoInput} Área do quadrado = ${squareAreaValue} `);

//Use os métodos importados circleArea() e squareArea() aqui
//Imprima os valores de areaOfCircle e areaOfSquare aqui