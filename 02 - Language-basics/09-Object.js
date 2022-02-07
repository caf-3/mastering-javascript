let o = new Object();
console.log(o)
o = new Object; // legal, but not recommended
o.name = "me"
console.log(o.hasOwnProperty("name"))
console.log(o.toString())