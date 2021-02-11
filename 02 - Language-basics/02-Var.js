function teste(){
    //global var (Not recommended because of strict mode)
    message = "Hi, Mr developer";
    console.log(message);
}
teste();
setTimeout(() => console.log(message), 2000);
//global variable
var defaultAge = 18;
function showAge(){
    console.log('(funCall(x))\nDefault age is set to '+defaultAge);
}
showAge();
setTimeout(()=> console.log(`!funCal(x)\nDefault age is set to ${defaultAge}`), 4000);

// DEFINING MORE THAN ONE VAR
var message = "Wellcome",
    developer = true,
    userName = "Tomás";
console.log(userName);
// VAR HOISTING
function foo(){
    var age = 20;
    var age = 20;
    var age = 20;
    console.log(age);
}
foo();