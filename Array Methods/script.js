"use strict";

let arr = ["a", "b", "c", "d", "e"];

// slice method
console.log(arr.slice(3));
console.log(arr.slice(1, 3));
console.log(arr.slice(-1));
console.log(arr.slice(3));
console.log(arr.slice(1, -1));

// splice method
// splice will mutate the original array
// console.log(arr.splice(2));
// console.log(arr);
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// reverse method
// reverse will mutate the original array
arr = ["a", "b", "c", "d", "e"];
let arrTwo = ["j", "i", "h", "g", "f"];
arrTwo.reverse();
console.log(arr);
console.log(arrTwo);

// concat method
const letters = arr.concat(arrTwo);
console.log(letters);
// you can also use the spread operator
const firstTenLetters = [...arr, ...arrTwo];
console.log(firstTenLetters);

// join method
// gives a string
console.log(letters.join(" <==> "));

// at method
const numbers = [5, 10, 15, 20, 25, 50, 100];
console.log(numbers[0]);
console.log(numbers.at(0));
console.log(numbers[numbers.length - 1]);
console.log(numbers.at(-1));

// for of & forEach method
const transactions = [200, -30, -92, 400];

// for loop example
console.log(`----- for of example -----`);
for (const transaction of transactions) {
  if (transaction > 0) {
    console.log(`You deposit ${transaction}`);
  } else {
    console.log(`You withdraw ${Math.abs(transaction)}`);
  }
}

console.log(`----- for of example with i -----`);
for (const [i, transaction] of transactions.entries()) {
  if (transaction > 0) {
    console.log(`${i + 1}: You deposit ${transaction}`);
  } else {
    console.log(`${i + 1}: You withdraw ${Math.abs(transaction)}`);
  }
}

// forEach loop example
console.log(`----- forEach example -----`);
transactions.forEach(function (transaction) {
  if (transaction > 0) {
    console.log(`You deposit ${transaction}`);
  } else {
    console.log(`You withdraw ${Math.abs(transaction)}`);
  }
});

// forEach loop example with i
console.log(`----- forEach example with i-----`);
// always first the current element and than the index
transactions.forEach(function (transaction, index, array) {
  if (transaction > 0) {
    console.log(`${index + 1}: You deposit ${transaction}`);
  } else {
    console.log(`${index + 1}: You withdraw ${Math.abs(transaction)}`);
  }
});

// Math.abs return the absolute value of a number
// so -5 will be 5
console.log(5 === Math.abs(-5));

// forEach with maps
const currencies = new Map([
  ["USD", "United States Dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound Sterling"],
]);
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// forEach with sets
const currenciesUnique = new Set([
  "EUR",
  "USD",
  "JPY",
  "USD",
  "GBP",
  "CAD",
  "USD",
  "EUR",
]);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(value);
});
