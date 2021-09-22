/* function findFruitIndex(arr, item) {
    let indexOfFruit = arr.indexOf(item)
    return indexOfFruit
}
 */
let array = [
  "mango",
  "dorian",
  "loquat",
  "jackfruit",
  "spanish lime",
  "watermelon",
  "cotton candy grape",
  123,
];

console.log(array.splice(2,0,"strawberry"))
console.log(array)

const fruit = "loquat";

console.log("the index of", fruit, "is", findFruitIndex(array, fruit))

function findAnotherFruitIndex() {
  for (let i = 0; i < array.length; i++) {
    if (fruit === array[i]) {
      return i
    }
  }
}

console.log(findAnotherFruitIndex());



