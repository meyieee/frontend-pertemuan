// Function BMI

let hitungBmi = function(berat, tinggi) {
    let bmi = berat / (tinggi * tinggi);
    return bmi;
};

let tinggi = 1.5;
let berat = 50;
let output = hitungBmi(berat, tinggi);
console.log(output);
