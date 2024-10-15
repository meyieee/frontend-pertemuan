// Cara 1. Function Declaration
// Fungsi yan berdiri sendiri

// function initialization

// function greeting1() {
//     console.log("Hello World");
// }
// greeting1();

// // Cara 2. Function Expression

// let greeting2 = function() {
//     console.log("Hello World");
// }
// greeting2();

// parameter and argument

// // cara 1
// function greeting1(fullName) {
//     return "Hello" + fullName;
// }
                        // Argument
// let output1 = greeting1("John Doe");
// console.log(output);

// // cara 2  (error)
// let greeting2 = function (fullName)
// {
//     return "Hello" + fullName;
// };
// let output2 = greeting2("Meilyan siwy");
// console.log(output2);

// function hoisting

// // cara 1
// 
// let output1 = greetings1("JOhn Doe")
// console.log(output1);

// function greetings1 (fullName) {
//     return "Hello" + fullName;
// };

// global dan local scope ( function & block)

let x = 10; // global

function foo() {
    let y = 20 // Local
    console.log(x);
    console.log(y);
    if (x < y) {
        let z = 30;// local block
        console.log(z);// 30
    }
    console.log(z);
}
