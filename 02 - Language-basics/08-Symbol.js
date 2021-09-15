let symbol = Symbol();
console.log(typeof symbol);

let _id = Symbol('SymbolDescription');

console.log(_id);
console.log(_id.description)

let user = { // belongs to another code
    name: "John"
};

let _age = Symbol('age');
user[_age] = 20;
console.log(user[_age]);
let __age = Symbol('age');
user[__age] = 21;
console.log(user[__age]);
console.log(user);

let id = Symbol('id');
let _user = {
    name: 'Paula',
    [id]: 123
}

console.log(_user)

//Symbols are skipped by for…in
const userId = Symbol('userId');

const customUser = {
    name: "Julia",
    age: 26,
    [userId]: 0123
} 

for (let key in customUser) console.log(key,":",customUser[key]);
console.log(0123)
// Direct access
console.log(customUser[userId])