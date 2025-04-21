//Immeadiate invoked function expression
(
function one() {
    //named IIFE
    console.log("this is Immediate invoked function expression");
})();

(() => {
    //Normal IIFE
    console.log(`DB connected two`)
})();