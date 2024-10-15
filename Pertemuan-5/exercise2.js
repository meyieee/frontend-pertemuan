// Function BMI IIFE & Callback
//1. IIFE
let hitungBmi = (function (berat, tinggi){
    let bmi = berat / (tinggi * tinggi);
    return bmi;
})(55,1.5);
console.log(hitungBmi);

// 2. callBack

function hitungBmi(berat, tinggi, callback){
    let bmi = berat / (tinggi * tinggi);
    callback(bmi);
}
let tinggi = 1.5;
let berat = 55;
hitungBmi(berat,tinggi, function(output) {
    console.log(output);
});
