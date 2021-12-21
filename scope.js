let globalVar = "global variable";

function badFunction() {
  console.log("I am bad...");
  console.log(globalVar);
  globalVar = "Oops, I broke it";
  console.log(globalVar);
  const functionVar = "function variable";
  console.log(functionVar);
}

console.log(globalVar);

badFunction();
console.log(globalVar);
