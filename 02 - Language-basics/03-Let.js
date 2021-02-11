// //VAR IS FUNCTION SCOPPED WHILE LET IS BLOCK SCOPPED
// if(true){
//     var math = 13;
//     console.log('math:',math);
// }
// console.log(math);
// if(true){
//     let portuguese = 15;
//     console.log('Portuguese:',portuguese);
// }
// //console.log(portuguese);
// function test(){
//     let age = 20;
//     console.log(age);
// }
// setTimeout(() => console.log(age), 2000);

// REDUNDAT DECLARATION IS NOW ALLOWED IN LET
// Allowed
var userName;
var userName;
// Not allowed
let isLogged;
//let isLogged;

var email = '00caf3@gmail.com';
console.log(`Global scope call: ${email}`);
if(true){
    var email = 'tomascaetano@caf3.co';
    console.log(`Block scope call: ${email}`);
}
console.log(`Global scope call: ${email}`);

let country = 'Mozambique';
console.log(`\n\Global scope call: ${country}`);
if(true){
    let country = 'Brazil';
    console.log(`Block scope call: ${country}`);
}
console.log(`Global scope call: ${country}`);