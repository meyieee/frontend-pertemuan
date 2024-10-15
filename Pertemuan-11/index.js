// String liter, Arrow function, deffault parameter
let fullName = "John Doe";
let age = 30;
let adress = "Manado";

// Halo nama saya John Doe, umur saya 30 tahun,
// dan saya tinggal di Manado
let kalimat1 =
  "Halo nama saya " +
  fullName +
  ", umur saya " +
  age +
  " tahun, dan saya tinggal di " +
  adress;
console.log(kalimat1);

// `` backtick untuk membuat string literal
let kalimat2 = `Halo nama saya ${fullName}, umur saya ${age} tahun, dan saya tinggal di ${adress}`;
console.log(kalimat2);

// Arrow function
// masih function biasa
function sayGreeting1(fullName) {
  return `Halo nama saya ${fullName}`;
}

console.log(sayGreeting1("John Doe"));

// sekarang arrow function = bentuk lain menulis function

const sayGreeting2 = () => {
  return `Halo nama saya ${fullName}`;
};

// const sayGreeting2 = () => `Halo nama saya ${fullName}`;
//    ini adalah implicit return value yang hanya berfungsi
// pada call back dan hanya pada satu baris

console.log("John Doe");

// Arrow function pada IIFE
let output1 = (() => "Hello World")();

// Arrow function pada callback
let numbers = [1, 2, 3, 4, 5];
let output2 = numbers.map((item) => item);
console.log(output2);

// Arrow function pada default parameter
const sayGreeting3 = (fullName, age, adress) => {
  if (!fullName) {
    fullName = "John Doe";
  }
  if (!age) {
    age = 30;
  }
  console.log(
    `Halo nama saya ${fullName}, umur saya ${age} tahun dan saya tinggal di ${adress}`
  );
};

sayGreeting3("Meilyan", 20, "Airmadidi");
const sayGreeting4 = (fullName = "John Doe", age = 30, adress = "Manado") => {
  console.log(
    `Halo nama saya ${fullName}, umur saya ${age} tahun dan saya tinggal di ${adress}`
  );
};
sayGreeting4();
