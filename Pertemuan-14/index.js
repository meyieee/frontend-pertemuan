// jelaskan apa itu destructuring dalam array dan object
// destructuring array
// const [a, b, c] = [1, 2, 3];
// console.log(a); // Output: 1
// console.log(b); // Output: 2
// console.log(c); // Output: 3
// destructuring object
//const { name, age } = { name: 'John', age: 30 };
//console.log(name); // Output: 'John'

// destructuring dengan mengambil sebagian item dalam array
const [x, , z] = [1, 2, 3];
console.log(x); // Output: 1
console.log(z); // Output: 3
// destructuring dengan mengambil sebagian item dalam object
// const { name, age } = { name: "John", age: 30 };
// console.log(name); // Output: 'John'

//destructuring dengan menggunakan default value dalam array
const [a, b, c = 4] = [1, 2];
console.log(a); // Output: 1
console.log(b); // Output: 2

// destructuring dengan menggunakan default value dalam object
const { name, age = 30 } = { name: "John" };

// destructuring dengan menggunakan rest operator dalam array
const [u, ...rest] = [1, 2, 3];
console.log(u); // Output: 1

// destructuring dengan menggunakan rest operator dalam object
const { Name, ...resta } = { name: "John", age: 30 };
