const marvel_heros = ["spiderman", "thor", "captainamerica"]
const dc_heros = ["flash", "batman", "somehero"]

//to concatenate two arrays
// marvel_heros.push(dc_heros)
// console.log(marvel_heros) //concats a whole array as third element

// const all_heros  = marvel_heros.concat(dc_heros)
// console.log(all_heros); //returns a new array with all elements

//spread operator
const all_heros2 = [...marvel_heros, ...dc_heros]
console.log(all_heros2);