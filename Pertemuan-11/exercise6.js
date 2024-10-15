// Ubahlah syntax ES5 berikut ke dalam ES6

// 1 String literal
function calculateAge(birthYear) {
  return 2019 - birthYear;
}

function yearUntilRetirement(object) {
  const age = calculateAge(object.year);
  let retirement = 60 - age;

  if (retirement > 0) {
    console.log(`${object.firstName} retires in ${retirement} years`);
  } else {
    console.log(`${object.firstName} is already retired.`);
  }
}

yearUntilRetirement({ year: 1987, firstName: "John" });

// 2. Arrow function
const addNumber = (a, b, c, d, e, f, g) => {
  let numbers = [a, b, c, d, e, f, g];
  let sum = 0;
  //Change to map function
  numbers.map((num) => (sum += num));
  return sum;
};

console.log(addNumber(1, 2, 3, 4, 5, 6, 7));

// 3. let & const
let phi = 3.14;
let power = 2;
let radius = 0;

const calculateArea = function (obj) {
  return phi * Math.pow(obj.radius, obj.power);
};

radius = 21;
const area21 = calculateArea({ radius: radius, power: 2 });

radius = 7;
const area7 = calculateArea({ radius: radius, power: 2 });

console.log(`area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);

// 4. Default parameter
const makeAjaxRequest = (url = "www.google.com", method = "GET") => {
  console.log(url, method);
};

makeAjaxRequest("www.google.com");
