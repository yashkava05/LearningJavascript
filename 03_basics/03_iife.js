//immediately invoked function expression(iife)
//to run a function imm and to save it from the pollution of other global scope and its related pollution

//named iife
(function chai(){
    console.log("ek garam chai ki pyali ho");
})(); //using ; to end code as js doesnt know

(() => {
    console.log("koi usko pilane wali ho");
})();

((name) => {
    console.log(`${name} koi usko pilane wali ho`);
})("koitohhogi")