// Dado um array numérico qualquer sem valores repetidos, descubra qual é o índice do maior valor e o índice do menor valor. 

let numerico1 = [1, 2, 5, 50, 15, 66, 98, 700, 51, 202, 206];

let maiorValor = numerico1[0];
let menorValor = numerico1[0];
let indiceMaior = 0;
let indiceMenor = 0;

for (let i = 0; i < numerico1.length; i++) {
  if (numerico1[i] > maiorValor) {
    maiorValor = numerico1[i];
    indiceMaior = i;
  }
  if (numerico1[i] < menorValor) {
    menorValor = numerico1[i];
    indiceMenor = i;
  }
}

console.log(indiceMaior); 
console.log(indiceMenor); 

module.exports = {maiorValor, menorValor, indiceMaior,  indiceMenor}