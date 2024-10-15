// IIFE dan CallBack

// bentuk penulisan IIFE ( Immediately Invoked Function Expression )
// No Params & args & return value
// (function (){
//     console.log("Hello World");
// })();

// // With params & args & return value
// let output = (function (){
//     return "Hello "+ fullName;
// })("Meilyan Siwy");
// console.log(output);

// // CallBack
// function sayHello(callBack) {
//     callBack();
// }

// // function yang dikirm sebagai argument itu artinya anonymous function / function yg tdk memiliki nama
// // with no params and args
// function sayHello(callBack){
//     //logic
//     callBack();
// }

// sayHello(function () {
//     console.log("Hello Mey");
// });

// with  params & args & return value
function sayHello(callBack){
    //logic
    let output = callBack("Meilyan Siwy");
    return output;
}

let output = sayHello(function (fullName) {
    return "Hello " + fullName;
});
console.log(output);
