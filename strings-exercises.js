// let str = "Manny is happy, and Happy Birthday Manny"

// let replace = str.replace ("happy", "content")

// console.log(replace)

// const str1 = "Manny is happy, and Happy Birthday Manny"

// console.log(str1.split (' '))

function findFizzBuzz(num) {
  for (let i = 1; i <= num; i++) {
     if(i % 3 === 0 && i % 5 === 0){
      console.log("fizzBuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
const n = 25;
fizzBuzz("n");