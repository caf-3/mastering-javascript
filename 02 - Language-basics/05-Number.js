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

// NUMERIC CONVERSION
let num1 = Number("Hello world!"); // NaN
let num2 = Number(""); // 0
let num3 = Number("000011"); // 11
let num4 = Number(true); // 1

let num1 = parseInt("1234blue"); // 1234
let num2 = parseInt(""); // NaN
let num3 = parseInt("0xA"); // 10 - hexadecimal
let num4 = parseInt(22.5); // 22
let num5 = parseInt("70"); // 70 - decimal
let num6 = parseInt("0xf"); // 15 - hexadecimal
let num1 = parseInt("10", 2); // 2 - parsed as binary
let num2 = parseInt("10", 8); // 8 - parsed as octal
let num3 = parseInt("10", 10); // 10 - parsed as decimal
let num4 = parseInt("10", 16); // 16 - parsed as hexadecimal

let num1 = parseFloat("1234blue"); // 1234 - integer
let num2 = parseFloat("0xA"); // 0
let num3 = parseFloat("22.5"); // 22.5
let num4 = parseFloat("22.34.5"); // 22.34
let num5 = parseFloat("0908.5"); // 908.5
let num6 = parseFloat("3.125e7"); // 31250000