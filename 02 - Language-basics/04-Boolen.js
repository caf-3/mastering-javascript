let message = 'Hello World';
let messageAsBoolean = Boolean(message);
console.log(messageAsBoolean);
if(message){
    console.log('We got the message');
}
let nothing = {};
if(nothing){
    setTimeout(()=> console.log('Ola mundo'), 2000);
}