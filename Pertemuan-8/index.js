// Javascript loop
// 1. for - loop

// //Array object
let students = [
  {
    id: 1,
    firstName: "John",
    grade: 80,
  },
  {
    id: 2,
    firstName: "John",
    grade: 90,
  },
  {
    id: 3,
    firstName: "John",
    grade: 100,
  },
];
// //menampilkan semuanya
// console.log(students);
// // menampilkan item satu per satu // i++ mengincrement nilai i
// for(let i = 0; i < students.length; i++){
//     console.log(students[i]);

// }

//While loop
// let i = 0;
// while (i < students.length) {
//     console.log(students[i]);
//     i++;
// }
// do - while loop
// let i = 0;
// do {
//     console.log(students[i]);
//     i++;
// } while (i < students.length)

// Array built-in method
// 1. forEach()
// students.forEach(function (item, index) {
//     console.log(index);
//     console.log(item);
// });

// 2. map()
// let output = students.map(function(item){
//     return item;
// });
// console.log(output);

// 3. filter
// let output = students.filter(function (item){
//     return item.grade>=90;
// });
// console.log(output);

//4. find
// let output = students.find(function (item){
//     return item.grade>=90;
// });
// console.log(output);

//5. findIndex()
// let index = students.findIndex(function (item) {
//     return item.firstName === "Jane";
// });
// console.log(index);

//Mini Exercise
let countries = [
  { name: "Afghanistan" },
  { name: "Albania" },
  { name: "Algeria" },
  { name: "Andorra" },
  { name: "Angola" },
  { name: "Anguilla" },
  { name: "Antigua & Barbuda" },
  { name: "Argentina" },
  { name: "Armenia" },
  { name: "Aruba" },
  { name: "Australia" },
  { name: "Austria" },
  { name: "Azerbaijan" },
  { name: "Bahamas" },
  { name: "Bahrain" },
  { name: "Bangladesh" },
  { name: "Barbados" },
  { name: "Belarus" },
  { name: "Belgium" },
  { name: "Belize" },
  { name: "Benin" },
  { name: "Bermuda" },
  { name: "Bhutan" },
  { name: "Bolivia" },
  { name: "Bosnia & Herzegovina" },
  { name: "Botswana" },
  { name: "Brazil" },
  { name: "British Virgin Islands" },
  { name: "Brunei" },
  { name: "Bulgaria" },
  { name: "Burkina Faso" },
  { name: "Burundi" },
  { name: "Cambodia" },
  { name: "Cameroon" },
  { name: "Cape Verde" },
  { name: "Cayman Islands" },
  { name: "Chad" },
  { name: "Chile" },
  { name: "China" },
  { name: "Colombia" },
  { name: "Congo" },
  { name: "Cook Islands" },
  { name: "Costa Rica" },
  { name: "Cote D Ivoire" },
  { name: "Croatia" },
  { name: "Cruise Ship" },
  { name: "Cuba" },
  { name: "Cyprus" },
  { name: "Czech Republic" },
  { name: "Denmark" },
  { name: "Djibouti" },
  { name: "Dominica" },
  { name: "Dominican Republic" },
  { name: "Ecuador" },
  { name: "Egypt" },
  { name: "El Salvador" },
  { name: "Equatorial Guinea" },
  { name: "Estonia" },
  { name: "Ethiopia" },
  { name: "Falkland Islands" },
  { name: "Faroe Islands" },
  { name: "Fiji" },
  { name: "Finland" },
  { name: "France" },
  { name: "French Polynesia" },
  { name: "French West Indies" },
  { name: "Gabon" },
  { name: "Gambia" },
  { name: "Georgia" },
  { name: "Germany" },
  { name: "Ghana" },
  { name: "Gibraltar" },
  { name: "Greece" },
  { name: "Greenland" },
  { name: "Grenada" },
  { name: "Guam" },
  { name: "Guatemala" },
  { name: "Guernsey" },
  { name: "Guinea" },
  { name: "Guinea Bissau" },
  { name: "Guyana" },
  { name: "Haiti" },
  { name: "Honduras" },
  { name: "Hong Kong" },
  { name: "Hungary" },
  { name: "Iceland" },
  { name: "India" },
  { name: "Indonesia" },
  { name: "Iran" },
  { name: "Iraq" },
  { name: "Ireland" },
  { name: "Isle of Man" },
  { name: "Israel" },
  { name: "Italy" },
  { name: "Jamaica" },
  { name: "Japan" },
  { name: "Jersey" },
  { name: "Jordan" },
  { name: "Kazakhstan" },
  { name: "Kenya" },
  { name: "Kuwait" },
  { name: "Kyrgyz Republic" },
  { name: "Laos" },
  { name: "Latvia" },
  { name: "Lebanon" },
  { name: "Lesotho" },
  { name: "Liberia" },
  { name: "Libya" },
  { name: "Liechtenstein" },
  { name: "Lithuania" },
  { name: "Luxembourg" },
  { name: "Macau" },
  { name: "Macedonia" },
  { name: "Madagascar" },
  { name: "Malawi" },
  { name: "Malaysia" },
  { name: "Maldives" },
  { name: "Mali" },
  { name: "Malta" },
  { name: "Mauritania" },
  { name: "Mauritius" },
  { name: "Mexico" },
  { name: "Moldova" },
  { name: "Monaco" },
  { name: "Mongolia" },
  { name: "Montenegro" },
  { name: "Montserrat" },
  { name: "Morocco" },
  { name: "Mozambique" },
  { name: "Namibia" },
  { name: "Nepal" },
  { name: "Netherlands" },
  { name: "Netherlands Antilles" },
  { name: "New Caledonia" },
  { name: "New Zealand" },
  { name: "Nicaragua" },
  { name: "Niger" },
  { name: "Nigeria" },
  { name: "Norway" },
  { name: "Oman" },
  { name: "Pakistan" },
  { name: "Palestine" },
  { name: "Panama" },
  { name: "Papua New Guinea" },
  { name: "Paraguay" },
  { name: "Peru" },
  { name: "Philippines" },
  { name: "Poland" },
  { name: "Portugal" },
  { name: "Puerto Rico" },
  { name: "Qatar" },
  { name: "Reunion" },
  { name: "Romania" },
  { name: "Russia" },
  { name: "Rwanda" },
  { name: "Saint Pierre & Miquelon" },
  { name: "Samoa" },
  { name: "San Marino" },
  { name: "Satellite" },
  { name: "Saudi Arabia" },
  { name: "Senegal" },
  { name: "Serbia" },
  { name: "Seychelles" },
  { name: "Sierra Leone" },
  { name: "Singapore" },
  { name: "Slovakia" },
  { name: "Slovenia" },
  { name: "South Africa" },
  { name: "South Korea" },
  { name: "Spain" },
  { name: "Sri Lanka" },
  { name: "St Kitts & Nevis" },
  { name: "St Lucia" },
  { name: "St Vincent" },
  { name: "St. Lucia" },
  { name: "Sudan" },
  { name: "Suriname" },
  { name: "Swaziland" },
  { name: "Sweden" },
  { name: "Switzerland" },
  { name: "Syria" },
  { name: "Taiwan" },
  { name: "Tajikistan" },
  { name: "Tanzania" },
  { name: "Thailand" },
  { name: "Timor L'Este" },
  { name: "Togo" },
  { name: "Tonga" },
  { name: "Trinidad & Tobago" },
  { name: "Tunisia" },
  { name: "Turkey" },
  { name: "Turkmenistan" },
  { name: "Turks & Caicos" },
  { name: "Uganda" },
  { name: "Ukraine" },
  { name: "United Arab Emirates" },
  { name: "United Kingdom" },
  { name: "Uruguay" },
  { name: "Uzbekistan" },
  { name: "Venezuela" },
  { name: "Vietnam" },
  { name: "Virgin Islands (US)" },
  { name: "Yemen" },
  { name: "Zambia" },
  { name: "Zimbabwe" },
];

// cari indonesia index ke berapa

// let index = countries.findIndex(function (item) {
//   return item.country === "Indonesia";
// });
// console.log(index);

let output = countries.filter(function (item) {
  return item.name.endsWith("sia");
});

console.log(output);
let output1 = countries.filter(function (item) {
  return item.name.slice(-3) === "sia";
});
console.log(output1);
