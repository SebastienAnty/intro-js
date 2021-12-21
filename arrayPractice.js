const students = [
  "Sebas",
  "John",
  "Juan",
  "Alina",
  "Dariel",
  "Manny",
  "Amir",
  { instructors: ["Vitoria", "Todd", "Jonathan", "Darie", "Zach"] },
  { hours: 400 },
];

console.log(students);

students.push("Diana");
students.push("Angie");
students.unshift("Krhystopher");

const amount = students.length;

console.log(amount);

function whatever() {
  if (amount < 12) {
    console.log("not enough items");
  } else {
    console.log("just enough items", amount);
  }
}

whatever();

function addToArray(newStudent) {
  students.push(newStudent);

  console.log(students);
}

addToArray("Emily");
