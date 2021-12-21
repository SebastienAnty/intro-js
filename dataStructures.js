const nums = [673, 251, 1, 6, 56, 84, 633, 343, 252, 873];

function returnFirstElement(arr) {
  console.log(arr[0]);
}

returnFirstElement(nums);

function returnLastElement(arr) {
  console.log(arr.pop(9));
}

returnLastElement(nums);

const Array = [
  [64, 36, 93],
  [735, 625, 908],
  [234, 83, 65],
  [24, 95, 22],
];

function returnFirstElementSub(arr) {
  console.log(arr[0][0]);
}

returnFirstElementSub(Array);

function returnLastElementSub(arr) {
  console.log(arr.pop(3)[2]);
}

returnLastElementSub(Array);
