//Javascript object & Conditional
//Deklarasi Object (literal)
//Object literal

let john = {
    firstName: "Meilyan", //Properti & value
    age: 30,
    isMarried: true,
    grade:[80,90,100],
    sayGreeting: function(){             // this digunakan untuk memanggil objek
        console.log("Hello my name is " + this.firstName);
    },
    address: {
        street: "Jl. Arnold Mononutu",
        city: "Minahasa Utara",
        province: "Sulawesi Utara",
        postalCode: 95371,
    }

};
console.log(john);

//Mengakses properti dalam object
// 1. Dot nation

console.log(john.age ); // hanya akses properti umur
john.age = 31; // cara mengubah nilai
john.job = "teacher"; // tambah properti

// 2. Bracket notation
console.log(john[isMarried]);//true
john["nationality"] = "indonesia"; //tambah properti baru
console.log(john);

//Object method
john.sayGreeting();

//Object inside object 
console.log(john.address.city);

//Delete properti object
delete john.grade
console.log(john);

//Javascript  Conditional
// 1. if - else // kondisi nya cuma 1

//jika temprature > 37 tampilkan cuaca panas
//else tampilkan cuaca dingin

temp = 37
if (temp >= 37) {
    console.log("cuaca hari ini panas");
}else {
    console.log("Cuaca hari ini dingin");
}

//2. if - else if - else // cuaca nya banyak

//Jika nilai 100 - 80 grade A
// Jika niai 70 -  80 grade B
// jika nilai 50 - 70 C
// jika nilai < 50 grade d

let nilai = 85;

if(nilai >= 80 && nilai <= 100) {
    console.log("Grade A")
} else if (nilai >= 70 && nilai <= 80){
    console.log("Grade B");
} else if (nilai >= 50 && nilai <=70){
    console.log("Grade C");
} else if (nilai >= 50 && nilai <= 50) {
    console.log("Grade D");
}
   
// Switch Case
// 1. Tampilkan january
// 2. Tampilkan february
// 3. Tampilkan maret
// :
// 12. tampilkan desember

let month = 3;
switch(month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("Maret");
        break;

}