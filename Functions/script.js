"use strict";

// Function declaration
console.log(myAge(2003));
function myAge(birthYear) {
  return 2022 - birthYear;
}
console.log(myAge(2003));

// Function expression
const calcAge = function (birthYear) {
  return 2022 - birthYear;
};
const newAge = calcAge(2003);
console.log(newAge);

// Arrow Function
const newAgeTwo = (birthYear) => 2022 - birthYear;
const ageTwo = newAgeTwo(2003);
console.log(ageTwo);

const retirement = (birthYear) => {
  const myAge = 2022 - birthYear;
  const retire = 67 - myAge;
  return retire;
};
const retireAge = retirement(2003);
console.log(`It takes you ${retireAge} yrs before retirement.`);

const myRetirement = (birthYear, myName) => {
  const age = 2022 - birthYear;
  const retire = 67 - age;
  return `${myName} retires in ${retire} years.`;
};
console.log(myRetirement(2003, "MiamiHacker"));
console.log(myRetirement(1969, "JohnDoe"));

function cutApples(apple) {
  return apple * 4;
}
function makeAppleJuice(apples) {
  const applePieces = cutApples(apples);
  const juiceOfApples = `Cut ${apples} apples in ${applePieces} pieces for the applejuice.`;
  return juiceOfApples;
}
console.log(makeAppleJuice(3));

//
const averageTeam = (num1, num2, num3) => (num1 + num2 + num3) / 3;
let avgTeamOne = averageTeam(85, 54, 41);
let avgTeamTwo = averageTeam(23, 34, 27);
function checkWinner(avgTeamOne, avgTeamTwo) {
  if (avgTeamOne >= avgTeamTwo * 2 || avgTeamTwo >= avgTeamOne * 2) {
    if (avgTeamOne > avgTeamTwo) {
      console.log(`Team One win (${avgTeamOne} vs ${avgTeamTwo})`);
    } else {
      console.log(`Team Two win (${avgTeamOne} vs ${avgTeamTwo})`);
    }
  } else {
    console.log(`No winner (${avgTeamOne} vs ${avgTeamTwo})`);
  }
}
checkWinner(avgTeamOne, avgTeamTwo);
avgTeamOne = averageTeam(44, 23, 71);
avgTeamTwo = averageTeam(65, 54, 49);
checkWinner(avgTeamOne, avgTeamTwo);

console.log(`----- Celsius to Kelvin -----`);
const kelvin = function () {
  const measurment = {
    type: "temp",
    unit: "celsius",
    value: Number("10"),
    // value: Number(prompt(`Degrees celsius:`)),
  };
  console.table(measurment);
  const k = measurment.value + 273;
  return k;
};
console.log(kelvin());
