var myCountry = "Haiti";
var myContinent = "Americas";
var myPopulation = "11.26";

console.log("I am from", myCountry);
console.log("Located in", myContinent);
console.log("The population is", myPopulation);

let birthDate = "February 10, 2000";
console.log("You were born on", birthDate);

let a = 2;
let b = 3;

let num3 = 7;
let num4 = 8;

function sum() {
  return a + num3;
}

console.log(sum());

let car = {
  name: "Rolls Royce",
  model: "Phantom VIII",
  year: "2018",
  transmision: "8-speed automatic",
  horsePower: "563 hp",
};

console.log("Make & Model:", car.name + " " + car.model);

const testArray = [
  true,
  false,
  false,
  true,
  false,
  false,
  false,
  true,
  true,
  true,
  false,
];

function returnNumTrueValues() {
  const trueValues = toJoin(0);
  console.log("This is a", allTrueValues);
  console.log("There are a total of", NumTrueValues);
}

function createHalfPyramid(height) {
  for (let i = 1; i <= height; i++) {
    let row = "#".repeat(i);
    console.log(row);
  }
}

createHalfPyramid(5);

//Writing a loop HW 4

for (let i = 10; i >= 0; i--) {
  if (i === 0) {
    console.log("BLAST OFF!");
  } else {
    console.log(i);
  }
}

// Convert to upperCase HW 4

let str = "WHAT a TIME to BE ALIVE!";
console.log(str.toUpperCase());
