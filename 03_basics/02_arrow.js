const user = {
    username: "yash",
    course_price: 999,

    welcome: function(){
        console.log(`${this.username}, welcome to the site!`);
    }
}

// user.welcome()

//this keyword doesnt work in functions like it does in objects.

const func1 = () => {
    let username = "yash"
    console.log(this.username);
}

//func1() //same output for arrow function

// const addNums = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addNums(3, 5));

//implicit arrow fun,assumes you want to return a value
const addNums = (num1, num2) => num1 + num2

console.log(addNums(5, 15));