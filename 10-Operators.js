// UNIRY OPERATORS - Operators that work on only one value

//Increment and Decrement

//Prefix
let age = 22;
/*
When using either a prefix increment or a prefix decrement, the variable’s value is changed before
the statement is evaluated.
*/

console.log(++age); // Increments 1 and then print out 23

console.log(--age) // Decrements 1 and then print out 22

//Postfix
let minAge = 18;
console.log(minAge++) //print out 18 then increments 1
console.log(minAge--) // print out 19 then decrements 1
console.log(minAge) //18