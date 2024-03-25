// const promiseOne = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task is completed.");
//         resolve()
//     }, 2000);
// })

// promiseOne.then(function(){
//     console.log("Promise fulfilled.");
// })

// new Promise(function(resolve,reject){
//     setTimeout(() => {
//         console.log("async task 2");
//         resolve()
//     }, 2000);
// }).then( ()=> console.log("promise 2 fulfilled") )

// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         console.log("async task 3");
//         resolve({username:"yash_kava", email:"yash@example.com"})
//     }, 3000);
// })

// promiseThree.then(function(user){
//     console.log(user);
// })

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = false
        if(!error){
            resolve({username:"yash_k", msg:"successful"})
        }
        else{
            reject('ERROR:Something went wrong!')
        }
    }, 2000);
})

promiseFour.then( (user)=>{
    console.log(user);
    return user.username
} ).then(function(){
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally( () => console.log("The promise is either resolved or rejected."))