let intNum = 56;
// OCTAL
let num1 = 070; // OCTAL FOR 56
let num2 = 079; // INVALID OCTAL -- INTERPRETED AS 79
let num3 = 08; // INVALID OCTAL -- INTERPRETED AS 8;
console.log(num1, num2, num3);

// HEXADECIMAL
let hexNum1 = 0xA; // hexadecimal for 10
let hexNum2 = 0x1f; //hexadecimal for 31
console.log(hexNum2);

// FLOATING POINT NUMBER
let floatNum1 = 1.1;
let floatNum2 = 0.1;
let floatNum3 = .1; // VALID, BUT, NOT RECOMENDED
console.log(floatNum3);
let floatNum1 = 1.; // missing digit after decimal - interpreted as integer 1
let floatNum2 = 10.0; // whole number - interpreted as integer 10