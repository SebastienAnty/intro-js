function calculateAreaOfPie(diameter) {
  const radius = diameter / 2;
  const area = Math.PI * radius ** 2;
  return area;
}

function pricePerSqIn(area, price) {
  return price / area;
}

const diameter = 12;
const cost = 18.99;
const area = calculateAreaOfPie(diameter);
const pricePerUnitArea = pricePerSqIn(area, cost);

console.log(
  `a ${diameter}" pizza cost $${pricePerUnitArea.toFixed(2)} / sq. in. `
);
