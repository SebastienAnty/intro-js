const halfPyramidSolver = (rowCount, print) => {
  for (let i = 0; i < rowCount; i++) {
    let row = "#";
    for (let j = 0; j < i + 1; j++) {
      row += print;
    }
    console.log(row);
  }

  const promise = new Promise((resolve, reject) => {
    resolve(rowCount * 2);
  });
  return promise;
};

const halfPyramidSolver2 = (rowCount, print) => {
  let row = print;

  for (let i = 0; i < rowCount; i++) {
    console.log(row);
    row += print;
  }

  return rowCount;
};

const pyramidSolver = (rowcount, print) => {
  return new Promise((resolve, reject) => {
    if (!rowcount || !print) {
      reject("Row count and/or print not provided.");
    }

    resolve({ rowcount, print });
  });
};

const nicePyramidSolver = async (rowcount, print) => {
  try {
    let res = await pyramidSolver(rowcount, print);

    if (!res) {
      console.error("Something went horribly wrong");
    }

    let newCount = await halfPyramidSolver(res.rowcount, res.print);

    let finalCount = halfPyramidSolver2(newCount, "@");

    console.log(finalCount);
  } catch (error) {
    console.log("Oh No no no no no.", error);
  }
};

nicePyramidSolver(5, "#");
