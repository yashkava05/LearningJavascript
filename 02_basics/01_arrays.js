const myArray = ["yash", "dhruv", "kavit", "isha"]
// console.log(myArray[1]);

//array methods
// console.log(myArray.includes("yash"));
// console.log(myArray.indexOf(2));

const newArray = [1,2,3,4,5]

console.log("a", newArray);

const array2 = newArray.slice(1, 3)
console.log(array2);

console.log("b", newArray)

const array3 = newArray.splice(1, 3)
console.log(array3);

console.log("c", newArray);

//diff between slice and splice is that splice completely removes the elements from the 
//main array and also includes the last number whereas slice doesnt