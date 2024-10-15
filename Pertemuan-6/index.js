// // // Javascript array
// // // Deklarasi Array

// // // Cara 1. Array Literal
// // // variabel array harus pake s karena array adalah data jamak
// // let numbers = [1,2,3,4,5];
// // console.log(numbers);

// // // cara 2. Kata kunci New
// // let numbers2 = new Array(6,7,8,9,10);
// // console.log(numbers2);

// // Tipe data yang bisa disimpan dalam array
// let numbers = [1,2,3,4,5]; // number
// let student = ["John", "Alo", "Ungke"];// string
// let john = ["John,", 30,true,[80,90,100]]// mixed
// console.log(john);

// // array length
// console.log(numbers.length);
// console.log(student.length);

// // Mengakses elemen atau data tertentu didalam array
// // Melalui index array, array selalu dimulai dari nol
// console.log(numbers[2]); //3

// Mengakses elemen atau data terakhir dalam array
// let numbers2 = [1,2,3,4,5,6,];
//console.log(numbers2[numbers2.length -1]);  // 10

// 2. Array method
let array = [1,2,3, "Halo", false, true];
console.log(array);

//1. toString ()
console.log(array.toString());
//2. join ()
console.log(array.join(" "));
//3. pop()
array.pop()
console.log(array);
// 4. push ()
array.push("selamatkan aku");
console.log(array);
// 5. shift()
array.shift("Selamatkan aku");
console.log(array);
//6. unshift ()
array.unshift("Selamatkan aku");
console.log(array);
//7. splice ()
array.splice (3,1);
console.log(array);// hapus index 3 
array.splice(3,0,4,5);
console.log(array); // tambah 4,5 di index ke-3 
// 8. concat()
let buah = ["pisang", "mangga", "Melon"];
let sayor = ["wortel", "bayam", "tomat"];
let biji = ["brenebon,", "kacang"];