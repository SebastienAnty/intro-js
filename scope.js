let globalVar= "global variable" // available everywhere


function badFunction(){
    console.log("I am bad...")
    console.log(globalVar) //global variable
    globalVar = "Oops, I broke it"
    console.log(globalVar) // Oops, I broke it
    const functionVar = "function variable"
    console.log(functionVar)
}

console.log(globalVar) //global variable

badFunction()
console.log(globalVar) //Oops, I broke it
