let student = {
  firstName: "Sebastien",
  lastName: "Anty",
  city: "Delray Beach",
  family: {
    dad: "Reginald",
    mom: "Genevieve",
    s1: "Neri",
    s2: "Aurore & Abi",
    gf: "Brithney",
    pets: ["🐶", "🐱"],
  },
  education: {
    university: "pbsc",
    bootcamp: "Boca Code",
  },
};

console.log("first name:", student.firstName);
console.log("Full name:", student.firstName + " " + student.lastName);
console.log("pet:", student.family.pets[1]);
console.log("Boot Camp:", student.education.university.toUpperCase());
