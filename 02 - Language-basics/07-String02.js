// INTERPOLATION
let value = 5;
let exponent = 'second';
// formely
let interpolatedString = value+ ' to the '+exponent+' power is '+ (value*value);
//with template literals
let interplatedTemplateLiteral = `${value} to the ${exponent} power is ${value*value}`;
console.log(interpolatedString);
console.log(interplatedTemplateLiteral);
let foo = {
    toString: () => 'World',
};
console.log(`Hello, ${foo}`)
function captalize(world){
    return `${world[0].toUpperCase()}${world.slice(1)}`;
}
console.log(`${captalize('hello')}, ${captalize('world')}`);
console.log(`${captalize('tomas')} ${captalize('caetano')}`);

let value2 ='';
function append(){
    value2 = `${value2}abc`;
    console.log(value2);
}
append();
append();
append();

// TEMPLATE LITERAL TAG FUNCTIONS
const valueA = 1;
const valueB = 2;
function someTag(literals, ...substitutions){
    console.log(literals);
    console.log(substitutions);
}
someTag `${valueA} + ${valueB} = ${valueA + valueB}`;
/** The above expression returns
 * ["", " + ", " = ", ""]
 * [1, 2, 3]
 */

 // RAW STRINGS
 console.log(`Raw String of \u00A9 is ${String.raw`\u00A9`}`);
 console.log("first line\nsecond line");
 console.log(String.raw`first line\nsecond line`)