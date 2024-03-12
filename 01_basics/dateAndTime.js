let myDate = new Date(2023, 0, 23 , 12, 50)
// console.log(myDate);
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday: "short"
})

console.log(newDate);