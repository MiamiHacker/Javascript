"use strict";

let arr = ["a", "b", "c", "d", "e"];

///////////////
// slice method
console.log(arr.slice(3));
console.log(arr.slice(1, 3));
console.log(arr.slice(-1));
console.log(arr.slice(3));
console.log(arr.slice(1, -1));

/////////////////
// splice method
// splice will mutate the original array
// console.log(arr.splice(2));
// console.log(arr);
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

//////////////////
// reverse method
// reverse will mutate the original array
arr = ["a", "b", "c", "d", "e"];
let arrTwo = ["j", "i", "h", "g", "f"];
arrTwo.reverse();
console.log(arr);
console.log(arrTwo);

////////////////
// concat method
const letters = arr.concat(arrTwo);
console.log(letters);
// you can also use the spread operator
const firstTenLetters = [...arr, ...arrTwo];
console.log(firstTenLetters);

// join method
// gives a string
console.log(letters.join(" <==> "));

////////////
// at method
const numbers = [5, 10, 15, 20, 25, 50, 100];
console.log(numbers[0]);
console.log(numbers.at(0));
console.log(numbers[numbers.length - 1]);
console.log(numbers.at(-1));

// for of & forEach method
const transactions = [200, -30, -92, 400];

///////////////////
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

///////////////////////
// forEach loop example
console.log(`----- forEach example -----`);
transactions.forEach(function (transaction) {
  if (transaction > 0) {
    console.log(`You deposit ${transaction}`);
  } else {
    console.log(`You withdraw ${Math.abs(transaction)}`);
  }
});

//////////////////////////////
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

////////////////////
// forEach with maps
const currencies = new Map([
  ["USD", "United States Dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound Sterling"],
]);
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

////////////////////
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

//////////////
// map method
const convert = [1200, 1450, -400, 2200, -650, -130, -70, -135, 1940];
const convertEurUsd = 1.1;

const convertUsdArrow = convert.map((con) => con * convertEurUsd);

const convertUsd = convert.map(function (con) {
  return con * convertEurUsd;
});

console.log(convert);
console.log(convertUsdArrow);
console.log(convertUsd);

const bank = convert.map(
  (con, i) => `${i + 1}: ${con > 0 ? "deposit" : "withdraw"} ${Math.abs(con)}`
);
console.log(bank);

//////////////
// for of loop
const conEurUsd = [];
for (const con of convert) conEurUsd.push(con * convertEurUsd);
console.log(conEurUsd);

//////////
// filter
// const deposits = convert.filter(function (deposit) {
//   return deposit > 0;
// });
const deposits = convert.filter((deposit) => deposit > 0);
console.log(deposits);

const withdrawals = convert.filter((withdraw) => withdraw < 0);
console.log(withdrawals);

//////////////////////////////////
// reduce -> accumulator + current
const balance = convert.reduce(
  (accumulator, current) => accumulator + current,
  0
);
console.log(`Balance: ${balance}`);

const maxDeposit = convert.reduce(
  (accumulator, current) => (accumulator > current ? accumulator : current),
  convert[0]
);
console.log(`Max deposit: ${maxDeposit}`);

///////////
// for loop
const depositsTwo = [];
for (const deposit of deposits) if (deposit > 0) depositsTwo.push(deposit);
console.log(depositsTwo);

///////////////////////
// total deposit in USD
const totalDepositsUsd = convert
  .filter((con) => con > 0)
  .map((con) => con * convertEurUsd)
  .reduce((accumulator, current) => accumulator + current, 0);
console.log(`Total deposits $ ${totalDepositsUsd}`);

/////////////////////////
// total withdraws in USD
const totalWithdrawsUsd = convert
  .filter((con) => con < 0)
  .map((con) => con * convertEurUsd)
  .reduce((accumulator, current) => accumulator + current, 0);
console.log(`Total withdraws $ ${totalWithdrawsUsd.toFixed(2)}`);

//////////////////////////////////
// first withdraw with find method
const firstWithdrawal = convert.find((con) => con < 0);
console.log(firstWithdrawal);

//////////////////////////////////
// find method example on a onject
// Data
const account1 = {
  owner: "Miami Hacker",
  movements: [1200, 1450, -400, 2200, -650, -130, -70, -135, 1940],
  interestRate: 1.7, // %
  pin: 1111,
};
const account2 = {
  owner: "John Doe",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.4,
  pin: 2222,
};
const account3 = {
  owner: "Jane Snow",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 1.9,
  pin: 3333,
};
const accounts = [account1, account2, account3];

const account = accounts.find((acc) => acc.owner === "Miami Hacker");
console.log(account);

//////////////////////////////////////
// includes method checks for Equality
console.log(convert.includes(-130));

/////////////////////////////////////
// some method checks for a condition
const anyDeposits = convert.some((con) => con > 2000);
console.log(anyDeposits);

///////////////
// every method
console.log(convert.every((con) => con >= 0));
console.log(convert.every((con) => con >= -650));

//////////////
// flat method
const numArr = [[1, 2], 3, [4, 5, 6], 7, 8];
const numArrDeep = [[1, 2], 3, [[4, 5], 6], 7, 8];
console.log(numArr.flat());
console.log(numArrDeep.flat());
console.log(numArrDeep.flat(2)); // 2 levels deep

// example flat
// const allAccountMovements = accounts.map((acc) => acc.movements);
// console.log(allAccountMovements);
// const allMovements = allAccountMovements.flat();
// console.log(allMovements);
// const totalBalance = allMovements.reduce(
//   (accumulator, current) => accumulator + current,
//   0
// );
// console.log(totalBalance);

//////////////
// flat method
const totalBalance = accounts
  .map((acc) => acc.movements)
  .flat()
  .reduce((accumulator, current) => accumulator + current, 0);
console.log(totalBalance);

/////////////////////////////////////
// flatMap method goes 1 level deep!!
const totalBankBalance = accounts
  .flatMap((acc) => acc.movements)
  .reduce((a, c) => a + c, 0);
console.log(totalBankBalance);

/////////////////////////
// sort method on strings
const nameArray = accounts.map((acc) => acc.owner);
console.log(nameArray.sort());
// it mutates the array
console.log(nameArray);

/////////////////////////
// sort method on numbers
const sortBalance = accounts.flatMap((acc) => acc.movements);
// Ascending
sortBalance.sort((a, b) => {
  // keep the order
  if (a > b) {
    return 1;
  }
  // change the order
  if (a < b) {
    return -1;
  }
});
console.log(sortBalance);
// Descending
sortBalance.sort((a, b) => {
  if (a > b) {
    return -1;
  }
  if (a < b) {
    return 1;
  }
});
console.log(sortBalance);
// or use
sortBalance.sort((a, b) => (a > b ? 1 : -1));
console.log(sortBalance);
sortBalance.sort((a, b) => a - b);
console.log(sortBalance);

console.log(
  sortBalance.sort((a, b) => {
    if (a > b) {
      return -1;
    }
    if (a < b) {
      return 1;
    }
  }) === sortBalance.sort((a, b) => a - b)
);

//////////////////
// generate arrays - fill method
const x = new Array(7).fill(1);
console.log(x);
x.fill(9, 1, 3).fill(7, 4, 6);
console.log(x);

///////////////
// from method
const y = Array.from({ length: 3 }, () => 1);
console.log(y);
const z = Array.from({ length: 10 }, (_, i) => (i + 1) * 9);
console.log(z);

///////////
// examples
const dice = Array.from({ length: 100 }, () =>
  Math.floor(Math.random() * 6 + 1)
);
console.log(dice);
console.log(dice.includes(7));
console.log(dice.filter((d) => d === 6).length);
console.log(dice.reduce((count, d) => (d === 6 ? count + 1 : count), 0));

// ++ and -- mutates the variable
let increment = 9;
console.log(++increment);
console.log(--increment);

///////////////////////
// reduce with a object
const sums = accounts
  .flatMap((acc) => acc.movements)
  .reduce(
    (sums, cur) => {
      cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      return sums;
    },
    {
      deposits: 0,
      withdrawals: 0,
    }
  );
console.log(sums);

// TitleCase with exceptions
const convertTitleCase = function (title) {
  const capitzalize = (str) => str[0].toUpperCase() + str.slice(1);

  const exceptions = [
    "a",
    "as",
    "at”",
    "by",
    "for",
    "in",
    "is",
    "of",
    "off",
    "on",
    "per",
    "to",
    "up",
    "via",
  ];

  const titleCase = title
    .toLowerCase()
    .split(" ")
    .map((word) => (exceptions.includes(word) ? word : capitzalize(word)))
    .join(" ");

  return capitzalize(titleCase);
};
console.log(convertTitleCase("is this A niCe title?"));
console.log(convertTitleCase("this is a title for you by me in javascript"));
