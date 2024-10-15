let BMI = {
    firstName: "Meilyan", 
    weight: 64,
    height: 1.64,
    calculateBMI: function() {
        let hitungBMI = this.weight / (this.height * this.height);

        if (hitungBMI <= 16.0){
            console.log(this.firstName +" Your BMI is Severely Underweight");
        } else if (hitungBMI > 16.0 && hitungBMI <= 18.4){
            console.log(this.firstName +" Your BMI is Underweight");
        } else if (hitungBMI >= 18.5 && hitungBMI <= 24.9){
            console.log(this.firstName +" Your BMI is Normal");
        } else if (hitungBMI >= 25 && hitungBMI <= 29.9) {
            console.log(this.firstName +" Your BMI is Moderately Obese");
        } else if (hitungBMI >= 30 && hitungBMI <= 34.9){
            console.log(this.firstName +" Your BMI is Severely Obese");
        } else {
            console.log(this.firstName +" Your BMI is Morbidly Obese");
        }
    }
};
console.log(BMI);
console.log(BMI.calculateBMI());