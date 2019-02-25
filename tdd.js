function sum(a, b) {
  return a + b;
}

function reduceNumbers(arr) {
  if (arr === undefined) return new Error("Got no parameter...");

  if (arr.length === 1) {
    return arr[0];
  }

  return arr.reduce((currentSum, number) => currentSum + number, 0);
}

function addGlobalVar(obj) {
  return Object.assign(window, obj);
}

function mapArray(array) {
  return array.map(element => element * 2);
}

module.exports = { sum, reduceNumbers, addGlobalVar, mapArray };

/*
 * Object.assaign vs spread syntax
 */
// const objTest = {
//   test: null,
//   monday: "sucks"
// }

// const result = Object.assign({}, objTest, { test: false }, { test: null })
// const result2 = { ...objTest, ...{ test: false }, ...{ test: null } }
