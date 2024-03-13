const tinderUser  = new Object()
// console.log(tinderUser);

tinderUser.id = "1234"
tinderUser.name = "HarryPotter"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj3 = {5:"e", 6:"f"}

// const obj4 = Object.assign({}, obj1, obj2, obj3) //assigns in a new empty object{} rather than obj1
// console.log(obj4);

const obj5 = {...obj1,...obj2,...obj3}
// console.log(obj5);

console.log(tinderUser);

console.log(Object.keys(tinderUser)); //returns keys as a separate array
console.log(Object.values(tinderUser)); //similarly values