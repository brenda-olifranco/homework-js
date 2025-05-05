//Calcule o MDC (máximo divisor comum) entre dois números.

let num1 = 10;
let num2 = 20;

function mdc(a, b) {
  while (b !== 0) {
    a = a % b;  
    if (a === 0) return b;  
    b = a;  
  }
  return a;  
}

console.log(mdc(num1, num2));  
