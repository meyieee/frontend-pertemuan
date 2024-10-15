// Rest Parameter & Spread Operator

// 1. Rest Parameter
// digunakan pada saat kita membuat fungsi yang memiliki banyak parameter

// fungsi tanpa rest parameter
const func1 = (param1, param2, param3, param4, param5) => {
  console.log(param1, param2, param3, param4, param5);
};
func1("a", "b", "c", "d", "e");
// fungsi dengan rest parameter (tipe data nya array)

const func2 = (...params) => {
  console.log(params);
};
func2("a", "b", "c", "d", "e");

// ress parameter harus berada di akhir list parameter
const func3 = (param1, param2, ...params) => {
  console.log(param1, param2, params);
};
func3("a", "b", "c", "d", "e");

// Mini exercise

const penjumlahan = (...arr) => {
  let sum = 0;
  arr.forEach((item) => {
    sum += item;
  });
};
console.log(penjumlahan(1, 2, 3, 4, 5, 6));

// Spread Operator
// digunakan untuk memecah array menjadi beberapa elemen
// menjadi elemen - elemen kecil

// Array
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
console.log(...numbers);

// 1. Duplikasi array
let numbers2 = [...numbers];
console.log(numbers2);

//2. Menggabungkan object
