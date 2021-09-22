function findFruitIndex(arr, item) {
    let indexOfFruit = arr.indexOf(item)
    return indexOfFruit
}

let array = ["mango", "dorian", "loquat", "jackfruit", "spanish lime", "watermelon", "cotton candy grape", 123];
const fruit = "dorian"

console.log("the index of", fruit, "is", findFruitIndex(array, fruit))
