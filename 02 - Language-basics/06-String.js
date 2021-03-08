// VALID STRING FORMAT
let firstName = 'Tomas';
let lastName = 'Caetano';
let role = `Web Developer`;
//let firstName = 'Nicholas";  syntax error - quotes must match
console.log('\nUnder new line\n');
console.log('\tAfter a tab');
console.log('sdfsdfsdfsdf    \bAfter a backspace');
console.log('\rCarriege return');
console.log('\fForm feed');
console.log('\\ Backlsash');
console.log('Same\'s House');
console.log("What she \"said\"");
console.log(`${firstName}\``);
console.log('\x41');
/**
 * Strings are immutable in ECMAScript, meaning that once they are created, their values cannot
change
 */
console.log('#### toString() convertion ####');
firstName = 'Paulo';
console.log(`${firstName}`)
let age = 11;
let ageAsString = age.toString();
console.log(typeof(age), typeof(ageAsString));
let found = true;
let foundAsString = found.toString();
console.log(typeof(found), typeof(foundAsString));
console.log('#### toString() convertion with Radix ####');
let num = 10;
console.log(num.toString());
console.log(num.toString(2));
console.log(num.toString(8));
console.log(num.toString(10));
console.log(num.toString(16));
console.log(Math.random().toString(16).slice(2));
console.log('#### String() convertion with Radix ####');
/**
 * Rules
 ➤ If the value has a toString() method, it is called (with no arguments) and the result
is returned.
 ➤ If the value is null, "null" is returned.
 ➤ If the value is undefined, "undefined" is returned.
 */
let value1 = 10;
let value2 = true;
let value3 = null;
let value4;
console.log(String(value1));
console.log(String(value2));
console.log(String(value3));
console.log(String(value4));
console.log('#### String with Template Literals ####');
let myMultiLineString = 'First line\nSecond line';
let myMultiLineTemplateLiteral = `First line
Second line`;
console.log(myMultiLineString);
console.log(myMultiLineTemplateLiteral);
console.log(myMultiLineString == myMultiLineTemplateLiteral);
let PageHtml = `
<div>
    <a href="#">Tomas</a>
</div>
`;
let myTemplateLiteral = `First Line
                        SecondLine`;
console.log(myTemplateLiteral.length);
let secondTemplateLiteral = `
First line
Second line`;
console.log(secondTemplateLiteral[0] == '\n');
