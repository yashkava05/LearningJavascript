const myNums = [1,2,3,4]

// const myTotal = myNums.reduce(function(accum, currVal){
//     console.log(`accumulator is ${accum} and currVal is ${currVal}`);
//     return accum + currVal
// }, 0)

const myTotal = myNums.reduce( (acc, curval) => acc + curval, 0 )

// console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const totalPrice = shoppingCart.reduce( (acc, item) => acc + item.price, 0 )
console.log(totalPrice);