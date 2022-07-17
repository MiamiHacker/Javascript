"use strict";

// runs while condition is true
for (let i = 1; i <= 3; i++) {
  console.log(`log ${i}`);
}

const person = [
  "MiamiHacker",
  "Student",
  19,
  ["John Doe", "Jane Doe"],
  "Miami FL",
  false,
];
const types = [];
for (let i = 0; i < person.length; i++) {
  console.log(person[i], typeof person[i]);
  // use like you prefer
  // types[i] = typeof person[i];
  types.push(typeof person[i]);
}
console.log(types);
console.log(`----- continue -----`);
for (let i = 0; i < person.length; i++) {
  if (typeof person[i] !== "string") continue;
  console.log(person[i], typeof person[i]);
}
console.log(`----- break -----`);
for (let i = 0; i < person.length; i++) {
  if (typeof person[i] === "number") break;
  console.log(person[i], typeof person[i]);
}
console.log(`----- loop backwards -----`);
for (let i = person.length - 1; i >= 0; i--) {
  console.log(i, person[i]);
}

console.log(`----- calc birthyear -----`);
const d = new Date();
let year = d.getFullYear();
const birthYear = [2003, 2000, 1993, 1987, 1981, 1977, 1968];
const ages = [];
console.log(year);
for (let i = 0; i < birthYear.length; i++) {
  ages.push(year - birthYear[i]);
}
console.log(ages);

console.log(`----- for loop inside for loop -----`);
const luckyNumber = [];
let randomNumber;
let pushNumber;
function giveNumber() {
  randomNumber = Math.random() * 100;
  pushNumber = randomNumber = Math.floor(randomNumber);
  // console.log(pushNumber);
  return pushNumber;
}
for (let row = 1; row <= 2; row++) {
  // console.log(`row ${row}`);
  let countRow = row;
  luckyNumber.push(countRow);
  for (let i = 1; i <= 5; i++) {
    giveNumber();
    luckyNumber.push(pushNumber);
  }
}
console.log(luckyNumber);

console.log(`----- while loop -----`);
let i = 1;
while (i <= 3) {
  console.log(i);
  i++;
}

console.log(`----- roll the dice -----`);
let dice = Math.trunc(Math.random() * 6 + 1);
const diceText = `you rolled a ${dice}`;
if (dice === 6) {
  console.log(diceText);
}
while (dice !== 6) {
  console.log(`you rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6 + 1);
  if (dice === 6) {
    console.log(diceText);
  }
}

console.log(`----- total of array -----`);
const x = [1, 2, 3, 4, 5];
const y = x.reduce((a, b) => a + b, 0);
console.log(y);

const calcTotal = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};
console.log(calcTotal([10, 67, 45, 7, 3, 78, 447, 4]));
console.log(calcTotal(x));

console.log(`----- average of array -----`);
const arr = [1, 2, 3, 4, 5];
const average = arr.reduce((a, b) => a + b, 0) / arr.length;
console.log(average);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(calcAverage([10, 67, 45, 7, 3, 78, 447, 4]));
console.log(calcAverage(x));

console.log(`----- tip calculator -----`);
// const bills = [100, 1000];
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let singleBills;
let totalBills;
let singleTips;
let totalTips;
const tips = [];
const totals = [];
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
for (let i = 0; i < bills.length; i++) {
  // console.log(bills[i]);
  singleBills = bills[i];
  // console.log(singleBills);
  singleTips = calcTip(bills[i]);
  tips.push(singleTips);
  // console.log(singleTips);
  totals.push(bills[i] + singleTips);
}
console.log(` bills:${bills}\n tips:${tips}\n totals:${totals}`);
totalBills = bills.reduce(function (acc, val) {
  return acc + val;
}, 0);
totalTips = tips.reduce(function (acc, val) {
  return acc + val;
}, 0);
console.log(
  `Avg Bills ${totalBills / bills.length}\nAvg Tips ${
    totalTips / bills.length
  }\nAvg Total ${(totalBills + totalTips) / bills.length}`
);
console.log();

console.log(`----- temperatures & amplitude-----`);
const tempsPartOne = [
  23,
  14,
  12,
  9,
  14,
  [121, -91, 89, -111],
  6,
  2,
  "error",
  -2,
  4,
  undefined,
  -6,
  7,
  1,
  NaN,
  13,
  9,
  false,
  19,
  26,
  30,
];
const tempsPartTwo = [31, -9];
const allTemps = tempsPartOne.concat(tempsPartTwo);
const calcTemp = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;
    if (curTemp > max) {
      max = curTemp;
    }
    // console.log(`Max: ${max}`);
    if (curTemp < min) {
      min = curTemp;
    }
    // console.log(`Min: ${min}`);
  }
  console.log(
    `Max temperature in Array: ${max}\nMin temperature in Array: ${min}`
  );
  return max - min;
};
// calcTemp(allTemps);
const amplitude = calcTemp(allTemps);
console.log(`The amplitude is ${amplitude}`);

console.log(`----- forecasted temperatures -----`);
const dataOne = [19, 23, 21, 25, 27];
const dataTwo = [12, 5, -5, 0, 4];
// console.log(dataOne, dataTwo);
const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    // console.log(`.. ${arr[i]}°C in ${i + 1} days ..`);
    if (i === 0) {
      str += ` .. ${arr[i]}°C in ${i + 1} day`;
    } else {
      str += ` .. ${arr[i]}°C in ${i + 1} days`;
    }
  }
  console.log(`${str} ..`);
};
printForecast(dataOne);
printForecast(dataTwo);
