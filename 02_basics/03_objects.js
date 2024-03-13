//object literals
const user1 = {
    name:"yash", 
    age:"21",
    location:"mumbai",
    email:"yash@google.com",
    isLoggedIn:false,
    lastLoginDays:["monday", "tuesday"]
}

user1.greeting = function(){
    console.log("Hello Js learners!");
}
console.log(user1.greeting());

user1.greetingTwo = function(){
    console.log(`Hello ${this.name}`) //accesses values from the current object that is defined.
}
console.log(user1.greetingTwo());